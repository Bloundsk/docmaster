# Changelog — DocMaster

## 2026-08-17 — Le workflow des actualités ne publiait pas les pages anglaises
Trouvé en vérifiant que la veille tournait bien. Elle tourne — deux passages
par jour, sans échec depuis le 14 août. Mais le workflow qui publie ce qu'elle
retient avait gardé une liste de fichiers écrite à la main :

```
git add data/actualites.json actualites.html index.html
```

Le script en écrit **cinq** depuis ce matin. Les deux pages anglaises étaient
donc modifiées à chaque passage, puis **perdues au checkout suivant**, sans
commit et sans message d'erreur.

C'est exactement le défaut que l'entrée précédente disait avoir corrigé : le
script rendait bien les quatre pages, mais **le workflow qui publie son
résultat n'avait pas suivi**. Corriger le producteur sans regarder ce qui
consomme sa sortie ne corrige rien.

### Deux changements, dont un qui rend l'oubli impossible

`git add -u` remplace la liste en dur : tout fichier suivi et modifié est
publié, quel que soit le nombre de pages que le script écrira demain.

Et une étape de vérification ferme la porte : si quoi que ce soit reste
modifié après le commit, le workflow **échoue** au lieu de laisser filer.
Une liste en dur oubliée redevient visible immédiatement, au lieu d'être
découverte des semaines plus tard devant une page figée.

### Vérifié en le provoquant

Le bloc d'actualités a été vidé dans les deux pages anglaises, puis le script
relancé : il les a bien réécrites toutes les deux. Deux passages consécutifs
ensuite ne produisent aucune modification — le rendu est idempotent, condition
sans laquelle chaque passage programmé produirait un commit inutile.

| Contrôle | Résultat |
|---|---|
| Fichiers écrits par le script | 5 |
| Couverts par l'ancienne liste | 3 — **`en/actualites.html` et `en/index.html` oubliés** |
| Réécriture après effacement | les deux pages restaurées |
| Deux passages consécutifs | « Pages inchangées » |
| `audit-coherence.mjs`, `valider-js.js` | 0 anomalie, 0 erreur |

### Au passage : l'état de la veille

| | |
|---|---|
| Dernier passage | 17/08 à 09:26, **succès** en 1 min 40 |
| Six derniers passages | tous en succès |
| Produit | Issue #30, 6 articles à trier |
| En attente de tri | **220 cases** réparties sur 9 rapports |

## 2026-08-17 — Les drapeaux ne s'affichaient pas sur ordinateur
Sur téléphone, le sélecteur montrait 🇫🇷 et 🇬🇧. Sur ordinateur, il affichait
« FR » et « GB » — deux lettres, pas un drapeau. Signalé depuis un poste
Windows, invisible depuis un mobile.

### Ce n'était pas un défaut de mise en page

**Windows n'a aucune police qui dessine les drapeaux.** Segoe UI Emoji n'en
contient pas un seul : c'est un choix de Microsoft, pas un manque de
configuration. Le système retombe alors sur les deux lettres qui composent le
caractère — un emoji drapeau est fait de deux « indicateurs régionaux », ici
🇫 et 🇷 — et les affiche telles quelles.

Aucune règle CSS ne corrige cela : **il n'y a pas de glyphe à styler.**

### Mesuré plutôt que supposé

Le diagnostic aurait pu s'arrêter à « ça ne marche pas sous Windows ». Il a été
vérifié sur la machine concernée, en mesurant la largeur du texte rendu :

| Mesure | Résultat |
|---|---|
| `🇫🇷` en entier | 28 px |
| `🇫` seul | 13 px |
| `🇷` seul | 15 px |
| Somme des deux | **28 px — exactement la même** |

Un vrai drapeau serait **un** glyphe, plus large que chacune de ses deux
lettres. Deux glyphes rendus côte à côte, c'est « FR ».

### Les sept drapeaux sont désormais dessinés

Du SVG en ligne dans `langues.js` : pas de fichier à charger, pas de
dépendance, net à toute taille, identique sur tous les systèmes. Cadre commun
3:2 pour que la liste reste alignée, hauteur en `em` pour suivre le texte
voisin, et un liseré très discret — sans lui, la bande blanche du drapeau
français se confond avec le fond clair.

L'Union Jack est adapté au cadre 3:2, comme le font les jeux d'icônes
rectangulaires, et ses diagonales rouges sont centrées plutôt que décalées en
contre-échange : à 18 px le décalage ne se voit pas et coûterait quatre tracés
de plus.

### Vérifié en échantillonnant les pixels peints

Un SVG déclaré juste peut se peindre faux. Chaque drapeau a donc été rendu dans
un canvas, puis **échantillonné point par point** — c'est la seule façon de
constater ce qui est peint plutôt que ce qui est écrit :

| Drapeau | Points vérifiés |
|---|---|
| 🇫🇷 | bleu / blanc / rouge aux trois bandes |
| 🇬🇧 | champ bleu, liseré blanc, croix rouge de bord à bord, diagonales |
| 🇪🇸 🇩🇪 🇮🇹 🇷🇺 | les trois bandes de chacun |
| 🇨🇳 | fond rouge, grande étoile, petite étoile |

Trois « échecs » du premier passage venaient de mes points de contrôle, pas des
drapeaux : le coin d'un Union Jack **est** rouge, son bras horizontal traverse
bien toute la largeur. Corrigés, les sept passent.

### Vérifications

| Contrôle | Résultat |
|---|---|
| Pixels peints, 7 drapeaux | conformes |
| `audit-geometrie.html` | 454 mesures, 26 gabarits, 0 anomalie |
| `audit-coherence.mjs` | 0 anomalie |
| `valider-js.js` | 0 erreur |
| Sélecteur à 1400, 700 et 375 px | drapeau 24×16, liste dans la fenêtre |
| Aucun emoji drapeau restant | vérifié dans le DOM |

## 2026-08-17 — Le sélecteur ne propose plus que les langues qui existent
Le menu déroulant offrait sept drapeaux. Cinq ne menaient nulle part :
l'espagnol, l'allemand, l'italien, le chinois et le russe n'ont que l'interface
traduite — les choisir donnait un menu traduit autour d'un site entièrement
français.

C'est exactement ce que la règle du projet interdit depuis l'origine :
**« un drapeau qui promet une traduction inexistante est pire que pas de
drapeau »**. Elle était écrite dans `ARCHITECTURE.md`, appliquée aux bandeaux,
et démentie par le sélecteur lui-même.

### La liste se déduit, elle ne se déclare pas

Une langue est proposée si elle a du contenu : un sujet dans `CONTENU_TRADUIT`,
ou une page dans `PAGES_TRADUITES`. Le français est toujours là, il est la
version d'origine.

Écrire une troisième liste à la main aurait demandé de la tenir à jour en
parallèle des deux autres — et elle aurait fini par les contredire. Déduite,
elle est juste par construction : **le jour où l'espagnol recevra son premier
sujet, son drapeau apparaîtra sans qu'on y pense.**

Les libellés des cinq langues restent en place. Ils sont prêts, l'audit
continue de vérifier les sept colonnes de `TEXTES` : c'est le contenu qui
manque, pas la traduction de l'interface.

### Le repli cachait une page sans navigation

`langueChoisie()` acceptait n'importe lequel des sept codes mémorisés. Un
visiteur ayant choisi le russe **avant** cette restriction gardait donc `ru`,
et `layout.js` cherchait alors un drapeau absent de sa liste. Lire `.drapeau`
sur `undefined` levait une exception **avant** le `document.write` de la
navigation.

Résultat mesuré en réinjectant le défaut : `navbar: ABSENTE`, **0 entrée de
menu**. Le repli se fait donc sur les langues disponibles, et ces visiteurs
retombent proprement sur le français.

### Un contrôle plutôt qu'une vigilance

`audit-coherence.mjs` signale désormais toute langue proposée sans contenu, et
vérifie au passage que les pages de `PAGES_TRADUITES` existent — ce qu'il
faisait déjà pour les sujets, mais pas pour les pages hors cours ajoutées ce
matin. Vérifié en réinjectant le défaut : 5 anomalies, sortie en erreur.

Il affiche aussi ce qu'il constate — `2 langue(s) proposée(s) : fr, en` — plutôt
que de se contenter de ne rien dire.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie ; **rougit** si une langue vide est proposée |
| `valider-js.js` | 0 erreur |
| Sélecteur, dans le navigateur | 2 entrées : 🇫🇷 Français, 🇬🇧 English |
| Préférence mémorisée `ru`, `es` | repli sur le français, menu et sélecteur intacts |
| Préférence mémorisée `en`, `fr` | inchangée |
| `TEXTES` | toujours 37 textes × 7 langues |

## 2026-08-17 — Les pages hors cours traduites : **le site entier bascule en anglais**
Huit pages sous `en/` — accueil, actualités, glossaire, boîte à idées, FAQ,
à propos, mentions légales, mon espace — plus une page 404 qui traduit son
propre texte. Avec les 56 pages de cours, **64 pages anglaises**.

Jusqu'ici, choisir l'anglais traduisait le menu et les cours, mais laissait
neuf pages en français. Le drapeau n'y menait nulle part, et les cartes de
l'accueil renvoyaient vers les guides français.

### Le bandeau affirmait quelque chose de faux

Un visiteur anglophone lisait sur l'accueil : *« The courses on this site are
written in French. The interface is translated; the course content is not
yet. »* C'était vrai à l'écriture de la phrase. Ça ne l'était plus depuis la
traduction du quatorzième sujet — et le message **décourageait d'aller lire
les cours qui existaient bel et bien**.

La leçon vaut au-delà de ce cas : **une affirmation sur l'ensemble du site
vieillit mal ; une affirmation sur la page qu'on a sous les yeux reste vraie.**
Le bandeau ne parle donc plus que de la page affichée, et il a maintenant trois
états au lieu d'un :

| Situation | Ce qui s'affiche |
|---|---|
| La page est déjà dans la bonne langue | rien |
| Elle existe dans cette langue | « This page is also available in English », **cliquable** |
| Elle n'existe pas | « This page has not been translated yet » |

### Le préfixe de langue n'est plus réservé aux cours

`langues.js` reconnaissait une page traduite au motif `/(langue)/guides/`.
Trois fonctions en dépendaient. Elles reconnaissent désormais aussi
`/(langue)/<page>.html`, avec une condition qui empêche de confondre un
préfixe avec un dossier homonyme : le jour où un sujet s'appellerait `it`,
`/guides/it/` aurait été lu comme de l'italien.

La liste des pages traduites vit dans un `PAGES_TRADUITES` distinct de
`CONTENU_TRADUIT` : les deux ne pointent pas au même endroit.

### Le menu était traduit, mais menait au français

Les liens de la barre et du pied étaient construits sur `base + fichier`.
Cliquer « Glossary » depuis une page anglaise ramenait donc à la page
française. Ils passent maintenant par un `lien()` qui pose le préfixe quand la
page existe dans la langue courante, et retombe sur le français sinon — une
404 ne se compense par aucun libellé traduit.

### La page 404 ne peut pas être dupliquée

GitHub Pages sert le 404 de la racine pour **toute** adresse inconnue, `/en/`
comprise : une copie sous `en/` ne serait jamais affichée. Cette page traduit
donc son propre texte, et son lien de retour mène à l'accueil de la bonne
langue. Le français reste écrit dans le HTML, pour rester lisible sans
JavaScript.

### Les actualités s'écrivent maintenant dans les deux langues

`publier-actualites.js` n'écrivait que `actualites.html` et `index.html`. Sans
correction, la page anglaise aurait figé la liste du jour de sa traduction,
**sans que rien ne le signale**. Le script rend désormais les quatre pages, à
partir d'un même jeu d'articles.

Les titres restent en français dans les deux versions : ce sont des titres
d'articles français, et un titre traduit ne se retrouve plus. Ce qui change,
c'est ce que le site écrit autour. La version anglaise renvoie vers la page
anglaise du guide **sans ancre** : les ancres anglaises portent d'autres noms,
et arriver en haut de la bonne page vaut mieux qu'arriver nulle part.

Le script accepte au passage `--hors-ligne`, qui réécrit les pages depuis
l'état enregistré sans interroger GitHub — la seule façon de voir le rendu
d'un gabarit modifié sans attendre le passage automatique suivant.

### Le contrôle de géométrie faisait la même hypothèse

Sa règle « langue déclarée = langue du texte » cherchait `/en/guides/`. Les six
nouvelles pages anglaises ont donc produit **24 échecs qui n'en étaient pas**,
le contrôle réclamant `lang="fr"` sur des pages anglaises. Même correction
qu'au-dessus, même raison.

### Ce qui reste en français, et le dit

- **Les titres d'articles** de la page Actualités, avec la raison écrite sur la page.
- **L'index de recherche** : 237 entrées titrées en français. Les liens mènent
  aux pages anglaises — la FAQ anglaise le dit à l'endroit où le lecteur le
  constate, et le message « aucun résultat » est traduit.
- **Les mentions légales** sont une traduction de courtoisie : le site est
  publié en France, un encadré indique que la version française fait foi.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `audit-geometrie.html` | **454 mesures, 26 gabarits**, 0 anomalie |
| `valider-js.js` | 0 erreur |
| Liens locaux | 3 235 vérifiés, 0 cassé |
| Bandeau, dans ses 3 états | vérifié page par page dans le navigateur |
| Menu et pied depuis `en/` | 22 liens, tous sous `en/` ou `assets/` |
| Page 404 en `fr` et en `en` | texte et lien de retour corrects, sans bandeau |
| Français résiduel sous `en/` | aucun, hors titres d'articles et noms propres |

## 2026-08-17 — Entrepreneuriat traduit : **les quatorze sujets sont en anglais**
Quatre pages, trois banques de questions, 146 textes de simulateurs.
`entrepreneuriat` est déclaré dans `CONTENU_TRADUIT` ; il était déjà dans
`SUJETS_DROIT_FRANCAIS`, le bandeau rouge s'affiche donc sur les quatre pages.

**Quatorze sujets sur quatorze**, soit 56 pages anglaises et 1 266 questions.
Le site existe désormais intégralement dans les deux langues.

### Ce qui est français ici, et ce qui ne l'est pas

Les **formes juridiques** — micro-entreprise, EURL/SARL, SASU/SAS — leurs
seuils, et le **coefficient de charges patronales de 1,45** sont français. Le
tableau des statuts est conservé tel quel, précédé d'une phrase qui dit que
chaque pays a l'équivalent de chacune de ces familles sous d'autres noms :
*« Read the columns, not the acronyms. »*

Les organismes cités deviennent génériques avec leur nom français en exemple —
« your public investment bank (Bpifrance in France) », « your national trade
mark office (the INPI in France) ». Le **RGPD**, lui, est signalé comme
européen et non français.

Tout le reste — valider un besoin, marge, seuil de rentabilité, autonomie,
unit economics, dilution, ce qu'il faut écrire avant que ça se passe mal — ne
dépend d'aucun pays.

### Une collision de dictionnaire, invisible jusqu'à ce jour

Le dictionnaire est plat : une clé, une traduction. Or `"tours"` était déjà
l'unité du simulateur de conversation de l'IA, où il signifie **turns**. Le
simulateur de dilution utilisait le même mot pour des **tours de table**. La
page anglaise aurait affiché « 2 turns » pour deux levées de fonds.

Aucun contrôle ne pouvait le voir : les deux entrées sont légitimes,
séparément. L'unité française de la dilution est donc devenue
`"tours de table"` — plus précise en français aussi — et traduite par
`"rounds"`. **Un dictionnaire plat ne distingue pas deux sens d'un mot ; c'est
au texte source de les distinguer.**

### Vingt-cinq pages anglaises pointaient encore vers le français

Quand un sujet était traduit, les pages anglaises **déjà écrites** continuaient
de le référencer par `../../../guides/<sujet>/` — le lien de repli posé à
l'époque où sa version anglaise n'existait pas. Sept liens vers
l'entrepreneuriat, mais aussi vers le droit, la santé, l'écologie et la
finance : au total **25 fichiers**, accumulés sujet après sujet.

Le défaut ne cassait rien — les liens fonctionnaient — mais éjectait le
visiteur anglophone vers une page française sans prévenir. Corrigé d'un coup,
en dérivant la règle de `CONTENU_TRADUIT` plutôt qu'à la main. Il ne reste
aucun lien `../../../guides/` sous `en/`.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × **14 sujets** | tous complets, **146/146** pour entrepreneuriat |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 982 vérifiés, 0 cassé, 0 renvoi vers le français |
| Ancres de quiz ↔ `id` des `h3` | 169 sections, 0 orpheline |
| `audit-geometrie.html` | 348 mesures, 20 gabarits, 0 anomalie |
| Bandeau de droit français | présent sur les quatre pages anglaises |
| Simulateurs posés FR ↔ EN | 12 de chaque côté, aucun écart |

## 2026-08-17 — Finance traduite, et un contrôle qui mentait encore
Quatre pages, trois banques de questions, 124 textes de simulateurs. `finance`
est déclaré dans `CONTENU_TRADUIT` ; le sujet était déjà dans
`SUJETS_DROIT_FRANCAIS`, le bandeau rouge s'affiche donc sur les quatre pages.

**Treize sujets sur quatorze**, soit 52 pages et 1 176 questions.

### Ce qui se traduit, et ce qui ne se traduit pas

Le raisonnement est universel : intérêts composés, coût des frais, asymétrie
des pertes, biais domestique, corrélation, aversion à la perte. **Les chiffres
ne le sont pas.** PEA, assurance-vie, compte-titres, fonds euros n'existent
qu'en France, et les taux de 30 % et 17,2 % avec eux.

Les noms sont donc **conservés comme noms propres, avec une glose anglaise** :
« a PEA — the French equity savings plan — held over 5 years ». Un lecteur qui
cherche le produit doit pouvoir le trouver ; un lecteur qui lit le chiffre doit
savoir d'où il vient. L'encadré d'avertissement de la page de sommaire est
remonté **au-dessus du parcours** et le dit sans détour : *« What transfers is
the reasoning. The figures do not. »*

### Le simulateur commande la prose, et non l'inverse

Le simulateur de biais domestique calcule sur la France — 3 % de la
capitalisation mondiale, écrit en dur. L'exemple de la page anglaise avait
d'abord été transposé au Royaume-Uni : 4 %, facteur six. La page annonçait donc
un chiffre, et le simulateur juste en dessous en affichait un autre.

Transposer un exemple est le bon réflexe — mais **pas quand un simulateur
partagé le contredit trois lignes plus bas**. L'exemple est revenu à la France,
en disant pourquoi, et en invitant le lecteur à y substituer son propre pays.
Rien de tout cela n'était visible dans un fichier : il a fallu ouvrir la page.

### Le contrôle annonçait 124/124 sur des libellés français

`verifier-traduction.mjs` appliquait deux filets aux **valeurs** calculées, mais
un seul aux **libellés** : la recherche de mots français. « Avec 0,2 % de
frais » ne contient ni accent, ni mot de la liste ; il passait. La page
anglaise affichait « With 0.2 % de frais » pendant que le contrôle disait que
rien ne manquait.

Le second filet — *ce qu'aucun fragment n'a touché* — est désormais appliqué
aux libellés aussi. Il a immédiatement trouvé **sept défauts** dans les pages
anglaises de finance, tous invisibles jusque-là :

| Libellé | Ce que la page anglaise affichait |
|---|---|
| `Avec 0,2 % de frais` (×4 valeurs) | « With 0.2 % de frais » |
| `Objectif minimal (3 mois)` | inchangé, en français |
| `Objectif confortable (6 mois)` | inchangé, en français |
| `En démarrant dans 1 an` | « Starting in 1 an » |

Le dernier méritait son propre correctif : le fragment `"En démarrant dans "`
mangeait l'espace de `" 1 an"`, qui n'était donc plus reconnu. **Un fragment
qui consomme l'espace finale désamorce tous les fragments soudés à un nombre**,
qui commencent tous par une espace. Il a perdu la sienne.

Zéro fausse alerte sur les douze autres sujets : le filet est plus strict sans
être bruyant.

### Une incohérence de chiffres côté français, corrigée

La page française annonçait 113 000 € et 84 000 € — ce que calcule le
simulateur, en capitalisation mensuelle. La banque de questions du même niveau
annonçait 108 000 € et 81 000 € — le même calcul en capitalisation annuelle.
Les deux étaient en ligne depuis l'origine. C'est la page qui a raison ; le
quiz français a été aligné.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 13 sujets | tous complets, **124/124** pour finance |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 912 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 157 sections, 0 orpheline |
| `audit-geometrie.html` | 330 mesures, 19 gabarits, 0 anomalie |
| Bandeau de droit français | présent sur les quatre pages anglaises |
| Simulateurs posés FR ↔ EN | 13 de chaque côté, aucun écart |

Reste **entrepreneuriat**, dernier des quatorze — lui aussi dans
`SUJETS_DROIT_FRANCAIS`.

## 2026-08-16 — Droit & démarches traduit : douze sujets sur quatorze
Quatre pages, trois banques de questions, 152 textes de simulateurs. `droit`
est déclaré dans `CONTENU_TRADUIT`, et le bandeau rouge s'affiche — le sujet
était déjà dans `SUJETS_DROIT_FRANCAIS` depuis l'origine.

**Douze sujets sur quatorze**, soit 48 pages et 1 080 questions.

### Le sujet le plus français de tous

Ici, rien n'est transposable : les délais de prescription, la garantie légale
de deux ans, le préavis de bail, la période d'essai, la majoration de 10 % sur
un dépôt de garantie rendu en retard — tout est du droit français.

La règle appliquée : **chaque fois qu'un délai ou un mécanisme est cité, la
version anglaise dit qu'il est français**, dans la phrase elle-même et pas
seulement dans le bandeau. « The general French limitation period is 5 years »,
« in France, twenty minutes are owed », « check your own country's rules ».
Le bandeau prévient ; la phrase, elle, empêche de sortir un chiffre de son
contexte.

Deux exceptions signalées comme telles : les **droits RGPD**, qui valent dans
toute l'Union, et les **noms propres** — Légifrance, le code du travail
numérique — conservés parce qu'un lecteur qui les cherche doit pouvoir les
trouver.

### Le singulier et le pluriel, un piège de traduction

Le français écrit « 1 mois » et « 2 mois » de la même façon ; l'anglais non.
Un fragment `" mois"` → `" months"` aurait produit « 1 months » dans le
simulateur de période d'essai et dans celui de prescription.

Deux fragments au singulier — `" 1 mois"` et `" 1 an "` — sont donc placés
**avant** le pluriel, l'ordre du plus long au plus court faisant le reste. Même
mécanisme que pour « réparties dans la journée » la veille : un fragment court
est toujours un piège pour la forme longue qui le contient.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 12 sujets | tous complets, **152/152** pour droit |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 842 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 12 sections, 0 orpheline |
| `audit-geometrie.html` | 312 mesures, 18 gabarits, 0 anomalie |
| Bandeau de droit français | présent sur les quatre pages anglaises |

## 2026-08-16 — Santé au travail traduite, et le bandeau de droit français enfin utilisé
Quatre pages, trois banques de questions, 149 textes de simulateurs. `sante`
est déclaré dans `CONTENU_TRADUIT`.

**Onze sujets sur quatorze**, soit 44 pages et 990 questions.

### `sante` rejoint `SUJETS_DROIT_FRANCAIS`

Le mécanisme existait depuis la mise en place des langues, mais n'avait jamais
servi sur un sujet traduit : `["droit", "finance", "entrepreneuriat"]`. Il
manquait celui-ci.

Ce guide est **massivement français** :

- le simulateur de pauses calcule le minimum du **code du travail français** —
  vingt minutes au-delà de six heures ;
- celui de récupération applique ses repos de **11 h et 35 h** ;
- tout le niveau avancé décrit la médecine du travail, le document unique,
  le CSE, le droit de retrait et l'aménagement de la charge de la preuve.

Ironie : l'exemple cité dans le commentaire de `SUJETS_DROIT_FRANCAIS` — « repos
quotidien de 11 heures » — venait précisément de ce guide, qui n'y figurait
pas. Le commentaire a été complété pour dire pourquoi.

**Effet vérifié** : bandeau rouge en tête des quatre pages anglaises,
*« This guide describes rules that apply in France »*. Sur les pages
françaises, aucun changement — le mécanisme s'arrête net si la langue est le
français.

### Le numéro d'urgence, traité avec précaution

Le guide cite le **3114**, numéro français de prévention du suicide. Le donner
tel quel à un lecteur anglophone en détresse serait au mieux inutile.

Partout où il apparaît — pages, verdict de simulateur, ressources — la version
anglaise dirige d'abord vers **la ligne d'écoute du pays du lecteur**, puis
mentionne le 3114 en le nommant comme français. L'ordre compte : c'est la
première information qui sera lue.

### Un fragment court qui piégeait un mot long

`" jour"` → `" day"`, ajouté pour Data, transformait « réparties dans la
journée » en **« réparties dans la daynée »**. Le fragment plus long
`", réparties dans la journée"` passe désormais avant. C'est la troisième fois
que l'ordre du plus long au plus court sauve un libellé — le principe est
maintenant écrit dans le fichier, à côté du cas.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 11 sujets | tous complets, **149/149** pour santé |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 772 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 12 sections, 0 orpheline |
| `audit-geometrie.html` | 298 mesures, 17 gabarits, 0 anomalie |
| Bandeau de droit français | présent en anglais, absent en français |

## 2026-08-16 — Écologie numérique traduite, et une hypothèse rendue visible
Quatre pages, trois banques de questions, 152 textes de simulateurs.
`ecologie` est déclaré dans `CONTENU_TRADUIT`.

**Dix sujets sur quatorze**, soit 40 pages et 900 questions.

### Le sujet où la traduction ne suffisait pas

Tous les calculs carbone de ce parcours reposent sur `G_PAR_KWH_FR = 60`,
c'est-à-dire l'**électricité française** — l'une des moins carbonées d'Europe
grâce au nucléaire et à l'hydraulique. Ailleurs, les mêmes opérations donnent
**cinq à dix fois plus**.

Traduire les pages sans plus d'égards aurait produit un guide qui affirme
« deux heures de vidéo par jour = 4,4 kg par an » à des lecteurs pour qui le
chiffre est faux d'un facteur cinq à dix. Sur un sujet dont la première leçon
est précisément « un chiffre sans pays ne veut rien dire », c'eût été
particulièrement mal venu.

L'avertissement français existait déjà ; il a été **promu** dans la version
anglaise. Chacune des quatre pages ouvre désormais sur un encadré titré
« Warning — the figures assume French electricity », placé avant tout le
reste, avec le facteur d'écart annoncé en gras. Le niveau intermédiaire, dont
la hiérarchie terminaux / réseau / serveurs dépend directement de cette
hypothèse, le rappelle une seconde fois dans la section concernée.

Une hypothèse qui change le résultat d'un facteur dix n'est pas une note de
bas de page.

### Le cadre réglementaire : européen, avec ses exceptions nommées

Indice de durabilité, disponibilité des pièces, filière DEEE, reprise à
l'achat : ce sont des mécanismes européens. **L'obsolescence programmée comme
délit pénal, en revanche, est spécifiquement française** — la version anglaise
le dit, au lieu de laisser croire à une règle générale.

### Une liste d'exceptions élargie, et vérifiée

`IDENTIQUES` accueille `kg`, `CO`, `kWh`, `km`, `GB`, `MB`, `W` : les unités de
ce sujet s'écrivent pareil dans les deux langues. Élargir une liste
d'exceptions affaiblit mécaniquement un contrôle, donc le défaut a été
réinjecté ensuite : en retirant le fragment `" par an"`, le contrôle signale
bien les huit valeurs devenues « kg CO₂e par an ».

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 10 sujets | tous complets, **152/152** pour écologie |
| Défaut réinjecté après élargissement d'`IDENTIQUES` | signalé, 8 valeurs |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 700 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 12 sections, 0 orpheline |
| `audit-geometrie.html` | 284 mesures, 16 gabarits, 0 anomalie |
| Rendu navigateur | 3 pages, curseurs et cases poussés aux extrêmes |

## 2026-08-16 — Marketing Digital traduit : neuf sujets sur quatorze
Quatre pages, trois banques de questions, 166 textes de simulateurs. Troisième
sujet consécutif sans français résiduel à la vérification. `marketing` est
déclaré dans `CONTENU_TRADUIT`.

**Neuf sujets sur quatorze**, soit 36 pages et 810 questions.

### Les exemples localisés, pas seulement traduits

Le niveau débutant illustrait l'intention de recherche avec « meilleur ETF
PEA » et « ouvrir PEA Boursorama » — un dispositif fiscal français et une
banque française. La longue traîne était montrée avec « assurance auto jeune
conducteur malussé Toulouse ».

Traduits mot à mot, ces exemples n'auraient rien illustré du tout pour un
lecteur anglophone. Ils sont donc **transposés** : l'ISA remplace le PEA,
Leeds remplace Toulouse. Le mécanisme enseigné est identique ; seul le décor
change. Une traduction qui garde un exemple incompréhensible traduit les mots
et perd la leçon.

### Le cadre juridique : européen, et dit comme tel

La section « cadre juridique » énonce des règles de RGPD et d'ePrivacy —
européennes, non françaises. Elles restent donc dans la version anglaise, mais
avec **une phrase de cadrage ajoutée** : le texte précise que la description
suit le cadre européen et invite à vérifier le régime applicable.

Le bandeau `SUJETS_DROIT_FRANCAIS` ne se justifie pas ici, pour la même raison
que dans Cybersécurité : ce sont des règles européennes largement transposées,
pas des articles de droit français. Les renvois vers la CNIL, la DGCCRF et
l'ARPP sont en revanche formulés par leur fonction.

### Nouveaux fragments

Neuf morceaux soudés à un nombre ou à un nom d'étape : `" ventes"`,
`" mois ("`, `" (coût : "`, `" par vente)"`, `" · clics : "`, plus les quatre
noms d'étapes du tunnel (« page produit », « ajout au panier »…). L'ordre du
plus long au plus court fait que `" par vente)"` passe avant `" ventes"`, ce
qui évite « par sale) » à moitié traduit.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 9 sujets | tous complets, **166/166** pour marketing |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 630 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 12 sections, 0 orpheline |
| `audit-geometrie.html` | 266 mesures, 15 gabarits, 0 anomalie |
| Rendu navigateur | 3 pages, curseurs et cases poussés aux extrêmes |

## 2026-08-16 — Cybersécurité traduite : huit sujets sur quatorze
Quatre pages, trois banques de questions, 165 textes de simulateurs —
**165 sur 165 dès la première passe**, comme pour l'IA. `cybersecurite` est
déclaré dans `CONTENU_TRADUIT`.

**Huit sujets sur quatorze**, soit 32 pages et 720 questions.

### Deux passes vertes d'affilée, et ce que cela dit

C'est le deuxième sujet consécutif traduit sans qu'aucune vérification ne
trouve de français résiduel. Ce n'est pas de la chance : le critère structurel
du vérificateur oblige à écrire une entrée exacte pour tout texte sans chiffre,
donc à ne rien oublier au moment de la traduction plutôt qu'à le découvrir
après coup.

Les seuls ajouts au dictionnaire hors entrées exactes sont un fragment
`" ans"` → `" years"` — pour les durées de recherche exhaustive du simulateur
de mots de passe, « 512 ans », « 10^58 ans » — et cinq paliers de durée
(« moins d'une seconde », « quelques heures »…) qui sont des **valeurs
entières**, donc des entrées exactes. Elles ne fonctionnent que depuis la
correction d'hier, qui fait passer les valeurs par `tr()` avant les fragments.

### Les références nationales rendues génériques

Le parcours renvoyait quatre fois vers des organismes français —
cybermalveillance.gouv.fr, l'ANSSI, la CNIL, Phishing Initiative. Un lecteur
anglophone n'en a pas l'usage, et le bandeau `SUJETS_DROIT_FRANCAIS` ne se
justifie pas ici : ce sont des pointeurs vers des ressources, pas des règles de
droit qu'on risquerait de prendre pour les siennes.

Ils sont donc formulés par leur fonction — « your national cybersecurity
agency », « your national cybercrime reporting service » — comme la CNIL l'a
été dans Data et l'IA.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 8 sujets | 138, **165**, 157, 166, 166, 176, 148, 156 |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 560 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 12 sections, 0 orpheline |
| `audit-geometrie.html` | 252 mesures, 14 gabarits, 0 anomalie |
| Rendu navigateur | 3 pages, curseurs et cases poussés aux extrêmes |

## 2026-08-16 — Intelligence Artificielle traduite, et la langue enfin cohérente
Quatre pages anglaises, trois banques de questions, 176 textes de simulateurs —
le plus gros sujet traduit jusqu'ici, et **176 sur 176 dès la première passe**.
`ia` est déclaré dans `CONTENU_TRADUIT`.

**Sept sujets sur quatorze**, soit 28 pages et 630 questions. La moitié.

### Le défaut le plus sérieux : « lang » suivait la préférence, pas le texte

Un visiteur qui avait choisi l'anglais une fois, puis ouvrait une page
**française**, obtenait :

- `lang="en"` sur une page dont chaque phrase est en français — prononciation
  fausse au lecteur d'écran, mauvais signal aux moteurs de recherche ;
- des nombres au format anglais collés à des mots français : **« 27,500 jetons »**,
  séparateur anglais, mot français.

La cause est une confusion entre deux notions qui existaient pourtant déjà côte
à côte dans `langues.js` : `langueChoisie()` — ce que le visiteur préfère — et
`langueDeLaPage()` — la langue dans laquelle le texte est réellement écrit.
L'attribut `lang` et le formatage des nombres décrivent le **texte**. Ils
suivent désormais `langueDeLaPage()`.

Sur une page de `en/`, les deux fonctions renvoient la même chose : seul le cas
dépareillé change. Ce qui explique pourquoi le défaut a survécu — il n'apparaît
qu'après avoir cliqué sur un drapeau.

### Un helper qui ne couvrait pas tous les cas se faisait contourner

`euros()` place le symbole selon la langue — « 1 600 € » en français, « €1,600 »
en anglais — mais arrondissait à l'unité. Quatre montants au jeton avaient donc
besoin de décimales, et se construisaient à la main en `nf(x, 2) + " €"`.

Résultat sur la page anglaise : **« €1,600 » à un endroit et « 105.00 € » à
l'autre**. `euros()` accepte maintenant un nombre de décimales, et les quatre
contournements ont disparu. Le commentaire qui prévenait du danger était déjà
dans le fichier, deux lignes au-dessus.

### Deux contrôles de plus dans l'audit de géométrie

Ces deux défauts n'étaient visibles ni dans un fichier ni dans un rendu par
défaut : il fallait avoir choisi une langue. L'audit navigateur **pose donc
délibérément une préférence anglaise** avant de mesurer, puis vérifie que la
langue déclarée et le séparateur des milliers suivent le texte de la page. La
préférence d'origine est remise en place à la fin.

Un contrôle qui ne met pas le système dans l'état à risque ne contrôle rien.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 7 sujets | 138, 157, 166, 166, **176**, 148, 156 — rien ne manque |
| Défauts réinjectés | les 2 nouveaux sont signalés, 28 lignes en échec |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 490 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 12 sections, 0 orpheline |
| `audit-geometrie.html` | 238 mesures, 13 gabarits, 0 anomalie |
| Rendu navigateur | pages FR et EN, préférence anglaise posée |

## 2026-08-16 — Data & Analytics traduit, et huit défauts trouvés en le vérifiant
Les quatre pages anglaises de Data et les trois banques de questions sont
écrites. `data` est maintenant déclaré dans `CONTENU_TRADUIT` : le drapeau
anglais mène vraiment quelque part depuis les pages françaises de Data.

**Six sujets sur quatorze**, soit 24 pages et 540 questions.

### Le contrôle de traduction annonçait 157/157 sur des pages en français

C'est la deuxième fois que ce vérificateur ment, et pour la même raison de
fond : **il cherchait des mots français dans une liste**. Une liste ne peut pas
être complète. « heures », « jours », « lignes », « Visiteurs » n'y étaient pas,
donc ces mots-là passaient pour traduits.

Le critère est désormais **structurel**, et ne suppose aucune connaissance du
français :

- Un texte **sans chiffre** est écrit tel quel dans le simulateur : il doit
  avoir une entrée exacte dans le dictionnaire. Pas de repli possible.
- Pour une valeur calculée, on applique les fragments **en bornant chaque
  remplacement**, puis on efface les zones bornées. Ce qui subsiste n'a été
  touché par rien, et doit figurer dans une courte liste de mots **approuvés**
  comme identiques dans les deux langues — `min`, `px`, `ms`, `mm`,
  `observations`.

La différence tient à la direction de l'erreur. Oublier un mot dans une liste
de recherche laisse passer le défaut **en silence**. Oublier un mot dans une
liste d'exceptions déclenche une **fausse alerte**, qui se corrige en une
ligne. Un contrôle doit se tromper du côté bruyant.

### Ce que le nouveau critère a trouvé, déjà en ligne

Huit défauts, dont sept sur des pages publiées depuis plusieurs jours :

| Page anglaise | Ce qui s'affichait |
|---|---|
| Design — avancé | `183 heures`, `26 jours`, `perceptible, mais acceptable`, `1 438 Ko` |
| Design — avancé | `conforme`, `limite`, `trop petite` (verdicts de taille tactile) |
| Dev web — avancé | `144 heures (4,1 semaines)` |
| Négociation — intermédiaire | `nulle`, `l'accord tient, mais aucune marge…` |
| Productivité — débutant | `Votre matrice sert-elle à quelque chose ?` |
| Data — avancé | `Visiteurs per day, tous groupes confondus`, `29 jours`, `46 000 lignes` |

Et un défaut de fond dans le moteur : les valeurs passaient par `trValeur`, qui
ne consulte que les fragments. Une valeur qui est un **verdict entier** —
« conforme », « perceptible, mais acceptable » — ne pouvait donc jamais avoir
d'entrée exacte. Elles passent maintenant par `tr`, qui cherche d'abord une
entrée exacte puis retombe sur les fragments : le comportement des valeurs
chiffrées est inchangé.

### Un dernier, trouvé par le navigateur et non par un script

Le bouton « Tout déplier » réécrivait son propre libellé **en français** à
chaque bascule, sur les quinze pages anglaises. Le libellé existait pourtant
dans `langues.js` ; `enhance.js` ne s'en servait pas. Aucun contrôle de fichier
ne pouvait le voir : le défaut n'apparaît qu'après un clic.

### Deux corrections d'hygiène

- `verifier-traduction.mjs` déduit sa racine de l'emplacement du script. Il
  contenait un chemin absolu, donc le nom de compte de la machine de
  développement, dans un dépôt public.
- `audit-geometrie.html` mesure une page Data de plus : 152 mesures, 12
  gabarits.

### Vérifications

| Contrôle | Résultat |
|---|---|
| `audit-coherence.mjs` | 0 anomalie sur 9 contrôles |
| `verifier-traduction.mjs` × 6 sujets | 138, 157, 166, 166, 148, 156 — rien ne manque |
| Défauts réinjectés un à un | les 5 testés sont signalés, sortie 1 |
| `valider-js.js` | 0 erreur |
| Liens locaux de `en/` | 420 vérifiés, 0 cassé |
| Ancres de quiz ↔ `id` des `h3` | 12 sections, 0 orpheline |
| `audit-geometrie.html` | 152 mesures, 0 anomalie |
| Rendu navigateur | 6 pages parcourues, curseurs poussés aux deux extrêmes |

## 2026-08-16 — Data & Analytics : le dictionnaire, pas encore les pages
**Livraison partielle, et annoncée comme telle.** Les 157 textes des 12
simulateurs de Data sont traduits et vérifiés — c'est la partie réutilisable et
la plus technique du travail. Les quatre pages de cours et les trois banques de
questions restent à écrire.

Rien n'est cassé pour autant : `data` **n'est pas déclaré** dans
`CONTENU_TRADUIT`, aucune page ne pointe vers `en/guides/data/`, et
`audit-coherence.mjs` vérifie précisément qu'un sujet annoncé traduit possède
ses pages. L'état est cohérent, simplement incomplet.

### Un point vérifié au passage

Data contenait trois mentions repérées comme « propres à la France ». Vérification
faite, il s'agit du **RGPD et de la CNIL** — du droit européen, pas français. Le
bandeau d'avertissement n'a donc pas lieu d'être ; seule la référence à
l'autorité nationale devra être formulée de façon générique dans les pages.

C'est le genre de distinction qu'un comptage automatique ne fait pas : « en
France » dans une phrase ne signifie pas que la règle soit française.

## 2026-08-16 — Cinquième sujet traduit : « Productivité » en anglais
Quatre pages, 12 simulateurs, 90 questions. **Cinq sujets sur quatorze**, soit
20 pages et 450 questions.

### Ce que le contrôle durci a changé

C'est le premier sujet traduit après la correction du vérificateur. La
différence se voit : **156 textes sur 156 dès la première passe**, et aucun
libellé français découvert en vérifiant le rendu — alors que les deux sujets
précédents en cachaient.

Un défaut de contrôle coûte deux fois : une fois quand il laisse passer, une
seconde quand il faut reprendre ce qui est déjà publié.

### Un cas nouveau : l'ordre des fragments

Un verdict de simulateur contenait « au-delà de 150 mots, la plupart des
lecteurs… ». Le fragment « mots », plus court, s'appliquait avant le fragment
long qui le contient — et le laissait à moitié traduit.

Les fragments s'appliquent désormais **du plus long au plus court**, dans le
rendu comme dans le contrôle. Le plus spécifique passe en premier, toujours.

### Vérifications

| Contrôle | Résultat |
|---|---|
| Textes de simulateurs, les 5 sujets | 138/138, 166/166, 166/166, 148/148, **156/156** |
| Français dans le rendu des 20 pages | **0** |
| Liens internes | aucun cassé |
| Géométrie | 142 mesures, 11 gabarits, aucune anomalie |

**Reste à traduire : 9 sujets.**

## 2026-08-16 — Négociation en anglais, et un contrôle qui mentait
Quatrième sujet traduit : quatre pages, 12 simulateurs, 90 questions. **Quatre
sujets sur quatorze**, soit 16 pages et 360 questions.

### Le contrôle annonçait « rien ne manque » sur des pages en partie françaises

C'est le vrai sujet de cette étape. En vérifiant le rendu, deux libellés
français sont apparus dans un simulateur — « Zone d'accord », « Largeur » —
alors que `verifier-traduction.mjs` annonçait **148 sur 148**.

Trois défauts distincts, tous de la même famille : **une logique écrite deux
fois, corrigée une seule.**

| Défaut | Conséquence |
|---|---|
| Le tri des fragments n'était appliqué que dans `pratique.js` | le contrôle signalait un défaut inexistant |
| La substitution était recopiée dans la boucle des valeurs | corriger l'ordre dans l'une ne corrigeait pas l'autre |
| La détection du français avait **deux listes de mots**, celle des valeurs plus étroite | « 2,5 % des tests » et « 87 % du temps » sont restés en français |

À quoi s'ajoutait un critère trop indulgent : un texte qu'**aucun fragment ne
touchait** était compté comme traduit, faute d'accent et de mot-outil. « Largeur »
passait ainsi pour de l'anglais.

### Ce que la correction a révélé

Le contrôle durci a sorti **38 textes non traduits**, dont une partie **déjà en
ligne** dans Design et Développement Web depuis leur publication. Tous corrigés
dans le même passage.

**Un contrôle qui ment est pire qu'une absence de contrôle** : il donne la
tranquillité sans la vérification. Les quatre sujets ont été repassés après
chaque correction, et le rendu réel des 16 pages a été balayé à la recherche de
français — le contrôle ne suffisait plus à me convaincre.

### Vérifications

| Contrôle | Résultat |
|---|---|
| Textes de simulateurs, les 4 sujets | **138/138, 166/166, 166/166, 148/148** |
| Français dans le rendu des 16 pages | **0** |
| Liens internes | aucun cassé |
| Géométrie | 132 mesures, 10 gabarits, aucune anomalie |

### Un défaut français trouvé par une page anglaise

L'audit de géométrie a signalé une valeur de simulateur sortant de l'écran à
375 px. Vérification faite, **le site français avait le même défaut, et pire** :
527 px contre 432. `white-space: nowrap` protège un montant comme « 1 600 € »
d'une coupure absurde, mais certaines valeurs sont des phrases entières.

Le défaut existait depuis toujours ; il n'a été trouvé qu'en ajoutant une page
traduite à la liste de l'audit. Corrigé pour les deux langues.

**Reste à traduire : 10 sujets.**

## 2026-08-16 — Troisième sujet traduit : « Développement Web » en anglais
Quatre pages, 12 simulateurs, 90 questions. **Trois sujets sur quatorze sont
lisibles en anglais.**

### Le sujet a été choisi, pas tiré au sort

Neuf candidats mesurés sur deux critères : le volume, et surtout le nombre de
règles proprement françaises. Développement Web en compte **zéro** — contre 10
pour Sobriété numérique et 4 pour Marketing. Un sujet sans droit français
n'oblige à aucun avertissement et se traduit sans risque d'induire en erreur.

### Ce que la mécanique a coûté cette fois

Le vérificateur a annoncé **166 textes, dont 32 déjà couverts** par les deux
sujets précédents. Le dictionnaire se rentabilise : un tiers du travail était
déjà fait avant de commencer.

Aucun ajustement du mécanisme n'a été nécessaire. Le seul cas particulier — un
libellé construit avec un nombre, « Une requête par élément (51 requêtes) » —
était déjà couvert par le repli sur les fragments ajouté pour Design.

### Vérifications

| Contrôle | Résultat |
|---|---|
| Textes de simulateurs — dev-web | **166 / 166** |
| Les deux sujets précédents, après ajout | **138 / 138** et **166 / 166** |
| Questions de quiz | 90, sur 12 sections |
| Liens internes des 4 pages | **aucun cassé** |
| Français résiduel dans les pages | **0** |
| Géométrie | 122 mesures, 9 gabarits, aucune anomalie |

**Reste à traduire : 11 sujets.**

## 2026-08-16 — Deuxième sujet traduit : « Design UX/UI » en anglais
Quatre pages, 12 simulateurs, 90 questions. **Deux sujets sur quatorze sont
désormais lisibles en anglais.**

### Ce que le pilote avait promis, et ce qu'il a tenu

Le sujet précédent avait servi à poser la mécanique. Le gain se mesure : le
script de vérification a annoncé d'emblée **166 textes à traduire, dont 5 déjà
couverts** — il n'y avait plus qu'à écrire, sans rien redécouvrir.

### Un cas que le pilote n'avait pas rencontré

Certains libellés se **construisent avec une valeur** : « Décider (Hick) —
4 familles ». Aucune entrée exacte ne peut les couvrir, puisque le nombre change
avec la saisie.

Deux ajustements, l'un dans le rendu et l'autre dans le contrôle :

- `tr()` repasse par les fragments quand la correspondance exacte échoue, ce qui
  traduit les morceaux fixes autour du nombre ;
- le vérificateur considère un texte **couvert si le visiteur n'y voit plus de
  français**, et non s'il possède une entrée. Le critère est ce qui s'affiche,
  pas la forme de la table.

Sans le second, le contrôle aurait signalé indéfiniment des textes pourtant
corrects — et ce bruit aurait fini par masquer un vrai oubli.

### Vérifications

| Contrôle | Résultat |
|---|---|
| Textes de simulateurs — design | **166 / 166** |
| Textes de simulateurs — apprendre, après les modifications | **138 / 138** |
| Questions de quiz | 90, sur 12 sections aux ancres anglaises |
| Liens internes des 4 pages | **aucun cassé** |
| Français résiduel dans les pages | **0** |
| Géométrie | 112 mesures, 8 gabarits, aucune anomalie |

Le sujet pilote a été revérifié après chaque modification du mécanisme : une
amélioration faite pour le second sujet ne doit pas casser le premier.

**Reste à traduire : 12 sujets**, et six langues.

## 2026-08-16 — Premier sujet traduit : « Apprendre à apprendre » en anglais
Sujet pilote choisi par l'auteur. Il ne touche pas au droit français, ce qui
permettait d'éprouver le modèle sur un cas simple avant les guides sensibles.

**Les quatre pages sont traduites**, et avec elles tout ce qui vit dedans :
12 simulateurs, 90 questions de quiz, les fils d'Ariane, les métadonnées et les
liens entre versions.

### Ce qui a demandé une décision d'architecture

Un cours doit rester **lisible sans JavaScript et indexable** : les pages
traduites sont donc de vrais fichiers, sous `en/guides/apprendre/`. C'est
l'inverse du choix fait pour l'interface, traduite par le navigateur — là, il
s'agissait d'éviter 455 fichiers au contenu identique.

**Les 169 simulateurs ne sont pas dupliqués.** Deux copies d'une formule
finissent par diverger, et une formule fausse ne se voit pas à l'écran : elle
produit un nombre plausible. Seuls les *textes* passent par un dictionnaire,
`assets/js/pratique/en.js`. La logique reste unique.

**Le formatage des nombres suit la langue.** Il était figé en `fr-FR` :
« 1 600,5 » affiché dans une page anglaise s'y lit « mille six cents virgule
cinq » au mieux, et faux au pire — une virgule décimale y passe pour un
séparateur de milliers. Corrigé à la source, pas dans le dictionnaire. L'anglais
écrit désormais « 21% » sans espace, le français garde la sienne.

**Les ancres des sections sont traduites**, et les banques de questions s'y
accrochent : `quiz.js` apparie une banque au `id` du titre. Une clef restée
française aurait laissé la section sans quiz, en silence.

### Vérifications

| Contrôle | Résultat |
|---|---|
| Textes de simulateurs couverts | **138 / 138** |
| Français restant dans les valeurs calculées | **0** sur 57 valeurs |
| Questions de quiz | 90, sur 12 sections aux ancres anglaises |
| Liens internes des 4 pages | **aucun cassé** |
| Géométrie | 102 mesures, 7 gabarits, aucune anomalie |

Le script `scripts/verifier-traduction.mjs` entre dans le dépôt : il exécute les
simulateurs d'un sujet pour relever ce qui s'affichera réellement, puis liste ce
que le dictionnaire ne couvre pas. Une lecture du code ne suffisait pas — les
libellés de résultat vivent dans le corps des fonctions de calcul.

### Le passage d'une version à l'autre

Le sélecteur mène désormais à la page traduite quand elle existe, et reste sur
place sinon — avec le bandeau qui explique. Une adresse fausse donnerait une
erreur 404, ce qui est bien pire que de rester avec une explication.

**Reste à traduire : 13 sujets**, et six langues.

## 2026-08-16 — Sept langues : l'ossature et l'interface
Demandé par l'auteur : un choix de langue avec drapeaux — anglais, espagnol,
allemand, italien, chinois, russe.

### Ce que la mesure a changé à la demande

Le contenu du site fait **84 059 mots**. Six langues, c'est un demi-million de
mots, et surtout chaque correction future serait à refaire sept fois.

Mais l'obstacle n'était pas le volume. Trois guides reposent sur le droit
français — **89 mentions** : Code du travail, URSSAF, assurance-vie, PEA,
micro-entreprise, délais de rétractation. Traduire « repos quotidien de
11 heures » n'en fait pas une règle allemande, et un lecteur espagnol suivant le
guide Finance lirait des conseils sur des produits qui n'existent pas chez lui.
**Ce n'est plus une traduction, c'est une information fausse** — sur du droit et
de l'argent.

L'auteur a tranché : traduire, sujet par sujet, et avertir clairement sur les
guides français.

### La structure d'abord

Le projet a appris à ses dépens que la structure précède le contenu. Traduire
84 000 mots puis changer de modèle voudrait dire tout refaire.

`assets/js/langues.js` devient la source unique — libellés, drapeaux, bandeaux,
sujets relevant du droit français, inventaire de ce qui est traduit.

Deux mécanismes, délibérément différents : **l'interface** est traduite par le
navigateur, ce qui évite 455 fichiers au contenu identique ; **le contenu** sera
fait de vrais fichiers dans `en/`, `es/`… car une page de cours doit rester
lisible sans JavaScript et indexable.

### Ce qui marche aujourd'hui

Sélecteur à sept drapeaux dans la barre de navigation, bâti sur `<details>` :
il s'ouvre au clavier, se ferme avec Échap, et s'annonce aux lecteurs d'écran
sans une ligne de JavaScript. Navigation, pied de page, recherche, boutons et
`<html lang>` suivent la langue choisie.

**Chaque drapeau est accompagné du nom de la langue** — un drapeau désigne un
pays, pas une langue : l'espagnol n'est pas parlé qu'en Espagne.

### Deux bandeaux d'honnêteté

Un drapeau qui promet une traduction inexistante est pire que pas de drapeau.
Hors français, le visiteur lit **dans sa langue** que les cours sont en français.
Et sur les trois guides concernés, que les règles décrites sont françaises.

Le français ne change pas d'un pixel : aucun bandeau ne s'y affiche.

### Le garde-fou

`audit-coherence.mjs` gagne un neuvième contrôle : chaque texte doit exister
dans les sept langues, un sujet annoncé traduit doit avoir ses pages, et
`langues.js` doit être chargé avant `layout.js` sur chacune des 65 pages.
Éprouvé en réinjectant les trois régressions — les trois sortent.

Contrastes vérifiés sur les nouveaux éléments, menu ouvert, dans les deux
thèmes : le plus juste tient 4,6:1. Géométrie inchangée, la barre de navigation
reste à 70 px.

**Reste à faire : les 84 000 mots de contenu**, sujet par sujet.

## 2026-08-16 — Un audit qui mesure la mise en page
Trois signalements d'affilée — actualités écrasées, cartes de parcours à 626 px,
titre mangeant une case de grille — venaient tous de la même passe visuelle et
du même genre d'erreur : **une règle écrite pour un cas qui en attrape d'autres.**
Aucun contrôle ne les voyait, et c'est l'auteur qui les a trouvés, après
publication.

Les audits existants lisent des fichiers. Celui-ci mesure des pages réellement
affichées.

### Pourquoi il ne bloque pas au commit

**Une largeur ne se déduit pas du CSS.** Savoir qu'une carte fait 626 px au lieu
de 1060 demande un moteur de rendu ; Node n'en a pas. L'y ajouter voudrait dire
installer un navigateur sans interface dans un projet qui n'a aucune dépendance
— un coût sans rapport avec le problème.

Le navigateur est donc le moteur, et le prix assumé est que l'audit se lance à
la main. `scripts/serveur.js` arrive avec lui : un serveur local de trente
lignes, sans dépendance, qui sert aussi à regarder le site avant de publier.

### Ce qu'il mesure

6 gabarits × 4 largeurs = **92 mesures**. Débordement horizontal, éléments hors
de la fenêtre, grilles qui occupent leur largeur, nombre de colonnes annoncé,
titres qui ne prennent pas une case, longueur de ligne du texte.

### Éprouvé, pas supposé

Les quatre familles de contrôle ont été **vérifiées en réinjectant les vraies
régressions**, une par une :

| Régression rejouée | Ce que l'audit a répondu |
|---|---|
| limite de lecture reprenant les listes à classe | `626 px sur 1060 (59 %)` — 6 échecs |
| titre rendu à la grille | `Nos catégories : 339 px sur 1060` — 3 échecs |
| 3 colonnes d'actualités + cartes trop larges | `dépasse de 165 px`, `3 obtenue(s)` — 16 échecs |

Puis retour à zéro échec après rétablissement. Un garde-fou qu'on n'essaie pas
ne garde rien : le contrôle de zoom en avait fait la démonstration la veille, son
seuil laissant passer le cas le plus probable.

## 2026-08-16 — Le titre « Nos catégories » occupait une case de la grille
Signalé par l'auteur, capture à l'appui : le titre se tenait à gauche, à hauteur
des cartes, et la première rangée n'en montrait que deux au lieu de trois.

Le `<h2>` est un enfant de la section. En faisant de cette section une grille,
il en est devenu **un élément comme les autres** et occupait la première case —
339 px, la largeur exacte d'une carte. Le titre mangeait une place de guide.

Il court désormais sur toute la largeur (`grid-column: 1 / -1`, qui suit le
nombre de colonnes quel qu'il soit) et il est centré au-dessus des cartes, comme
demandé.

### Un second défaut, invisible celui-là

L'échelonnement des apparitions reposait sur `nth-child`. Le titre étant compté
comme premier enfant, **tout était décalé d'un cran** : la première carte prenait
le délai de la deuxième, et la quatorzième, devenue quinzième enfant, ne
recevait aucun délai — elle surgissait donc seule, avant toutes les autres.

`nth-of-type` ne compte que les `<article>` et reste juste quoi qu'on ajoute
autour. Vérifié à quatre largeurs : le premier délai est bien de 0,04 s et le
dernier de 0,56 s.

## 2026-08-16 — Les actualités sur deux colonnes, et une régression de largeur
Demandé par l'auteur, capture à l'appui : le fil d'actualité s'affichait sur une
seule colonne, avec un grand vide à droite.

### La cause du vide n'était pas le nombre de colonnes

Les cartes ne faisaient que **626 px dans un conteneur de 1 100**. La règle de
largeur de lecture posée la veille — 62 signes maximum — visait `ul` et `ol`
enfants directs d'une section. `.actu-liste` en est un : la limite conçue pour
des paragraphes écrasait donc des cartes.

**Et pas seulement les actualités.** Les étapes des parcours (`.parcours`)
étaient touchées de la même façon, sur les quatorze pages de sommaire de guide :
des cartes de niveau réduites à 626 px au lieu de 1 060.

La règle distingue maintenant la prose du composant : **une liste qui porte une
classe n'est pas du texte courant.** Les listes sans classe — mentions légales,
À propos — gardent leur limite de lecture, qui est là pour elles.

### Deux colonnes

`.actu-liste` devient une grille de deux colonnes, une seule sous 700 px : les
titres de presse seraient coupés tous les deux mots sur un téléphone. Les cartes
d'une même rangée s'alignent en hauteur, ce que la grille fait d'elle-même.

### Un piège de cascade

Le repli mobile avait d'abord été écrit dans le bloc responsive commun, placé
plus haut dans le fichier. **À spécificité égale, c'est la dernière règle qui
l'emporte, media query ou non** : la grille définie plus bas l'écrasait, et le
téléphone gardait deux colonnes de 155 px. Le repli vit désormais auprès du
composant qu'il corrige.

## 2026-08-16 — Le dézoom rendu explicitement possible sur téléphone
Signalé par l'auteur : impossible de dézoomer sur son téléphone.

Rien ne l'interdisait pourtant. Les 65 pages portaient la même balise —
`width=device-width, initial-scale=1.0` — sans `user-scalable=no`, sans
`maximum-scale`, et aucune règle `touch-action` ne gênait le geste.

**Le défaut était le silence de la balise.** Ne rien dire des limites, c'est
laisser chaque navigateur choisir les siennes. Les navigateurs intégrés aux
applications — Facebook, Instagram, messageries — sont plus restrictifs que
Chrome ou Safari, et ramènent volontiers le dézoom à 1. Or c'est par là
qu'arrive une bonne part des visiteurs d'un site partagé sur les réseaux.

Les 65 pages autorisent désormais la plage explicitement : de **25 % à 500 %**.

### Le garde-fou

Le contrôle d'accessibilité surveille maintenant les **trois** façons de bloquer
le zoom : `user-scalable=no`, un plafond sous 2, un plancher au-dessus de 0,5.
Interdire d'agrandir met dehors quiconque a besoin de grossir pour lire — c'est
le critère 1.4.4 des WCAG.

Le seuil du plancher a dû être corrigé : il testait `> 1`, si bien que
`minimum-scale=1` — qui interdit pourtant tout dézoom — passait au travers. Le
défaut n'est apparu qu'en réinjectant les trois blocages pour éprouver le
contrôle. **Un garde-fou qu'on n'essaie pas ne garde rien.**

## 2026-08-16 — Quatre entrées du menu invisibles sur téléphone
Signalé par l'auteur, qui décrivait l'en-tête vu sur son téléphone. La barre de
navigation n'était pas cassée — à toutes les largeurs testées, de 320 à 500 px,
elle tient sur une seule rangée. Mais la mesure a montré autre chose.

### Le menu débordait sans le dire

| largeur d'écran | menu hors de l'écran |
|---|---|
| 320 px | **304 px** |
| 375 px | 249 px |
| 414 px | 210 px |

La barre de défilement est masquée volontairement — elle ferait un trait
disgracieux sous les liens. Conséquence non voulue : **rien n'indiquait qu'il y
avait une suite.** « Boîte à idées », « FAQ », « À propos » et « Mon espace »
n'existaient pas pour un visiteur sur téléphone.

Un dégradé estompe désormais le côté où il reste des liens. Il suit le doigt :
celui de droite disparaît une fois arrivé au bout, celui de gauche apparaît dès
qu'on a fait glisser. Une valeur figée aurait estompé le dernier lien en fin de
course, ce qui aurait été faux.

C'est un **masque** et non un dégradé de fond : posé derrière le texte, un fond
n'atténuerait pas les liens eux-mêmes.

### 46 % de l'écran avant la première ligne

Navigation 86 px, bannière 223 px, recherche 51 px : **373 px** s'écoulaient
avant le moindre contenu, sur un écran de 812. La bannière est resserrée sur
téléphone — 223 → 170 px — et le champ de recherche apparaît dès le premier
écran. Sur ordinateur, elle ne bouge pas : la place ne manque pas.

L'ordre de la page est laissé tel quel, sur décision de l'auteur.

### Le garde-fou des couleurs a signalé sa propre correction

Le `#000` du masque a été relevé comme couleur en dur. À juste titre au vu de la
règle, mais **un masque n'est pas une couleur** : il ne retient que la
transparence, et la teinte n'a aucun effet. Lui donner un jeton de palette
l'aurait fait changer de valeur selon le thème sans rien changer au rendu.

L'exemption est étroite et vérifiée : le contrôle attrape toujours une vraie
rustine réinjectée à côté.

## 2026-08-15 — Un nom d'utilisateur Windows publié dans le dépôt
`audit-coherence.mjs` ouvrait sur un chemin absolu écrit en dur, contenant le
nom de session Windows de l'auteur. Le site paraît sous pseudonyme et le dépôt
est public : cette ligne le contredisait, discrètement, à chaque consultation.

La racine se déduit désormais de l'emplacement du script. Deux effets : le nom
disparaît, et l'audit tourne depuis n'importe quel dossier de travail — ce qui a
été vérifié en le lançant depuis ailleurs que le dépôt.

C'est la seconde fois qu'un nom d'utilisateur passe dans ce dépôt public : un
`git add -A` y avait déjà envoyé `.claude/settings.local.json` le 8 août. Le
point commun n'est pas le fichier, c'est le chemin absolu — **sur ce dépôt, un
chemin en dur est un risque, pas une commodité**.

## 2026-08-15 — Passe visuelle : couleurs, lisibilité, page d'accueil
Le site fonctionnait ; il ne se donnait pas à lire. Trois défauts de fond, tous
mesurés avant d'être corrigés.

### La page d'accueil ne montrait pas son catalogue

Quatorze cartes de 1060 px empilées l'une sous l'autre, soit **3 985 px de haut**.
Il fallait cinq écrans pour découvrir l'offre, et rien ne se comparait puisque
rien n'était jamais visible en même temps.

Elles passent en grille : **2 741 px, trois colonnes, une seule sur téléphone**,
sans règle dédiée — la grille se recompose selon la largeur disponible.

La carte entière devient cliquable, et non plus le seul lien « Voir le guide » :
la cible passe de quelques dizaines de pixels à la carte complète, ce qui compte
surtout au doigt. Chaque emoji est isolé dans une pastille teintée, qui donne au
regard un point d'entrée par carte.

### Le texte s'étirait sur 130 signes par ligne

Sur un site dont le produit est un cours de 2 400 mots, ce n'est pas un détail
d'esthétique : l'œil perd sa ligne au retour bien avant. Les pages de cours
resserrent leur colonne, le texte courant est plafonné — **74 signes par ligne**,
dans l'optimum typographique de 60 à 75. Tableaux et simulateurs gardent la
largeur de la carte : ils se lisent en colonnes, pas en lignes.

### Le mode sombre était illisible par endroits

`--primary` valait le même bleu dans les deux thèmes. Sur une carte sombre, ce
bleu donne **2,83:1** là où un texte exige 4,5:1. Trois endroits avaient été
rattrapés un par un ; **une quinzaine d'autres étaient restés illisibles**, faute
d'avoir été remarqués.

La correction ne rattrape pas le seizième : elle sépare les deux rôles du bleu.
`--primary` sert à écrire et s'éclaircit en mode sombre ; `--primary-fond` sert
d'aplat et garde le bleu franc dont le texte blanc a besoin. Tout ce qui s'écrit
devient lisible d'un coup, **y compris ce qui sera ajouté plus tard**.

Dans la foulée : le violet passait à 2,57:1, le vert et l'orange tombaient sous
le seuil sur fond clair, et les encadrés d'exemple étaient à 1,05 de leur carte
— une bordure sans boîte. Tous ont désormais un jeton, clair et sombre.

**Vérification** : audit de contraste sur le DOM réel, 13 pages, les deux thèmes,
quiz répondus compris — **zéro échec**. Le texte le plus juste tient 4,83:1.

### Juste ou faux ne se lisait qu'à la couleur

Dans les quiz, la bonne et la mauvaise réponse ne se distinguaient que par une
bordure verte ou rouge. Pour une personne daltonienne — environ un homme sur
douze — les deux états étaient indistinguables, et le quiz ne disait plus rien.
Un ✓ et un ✗ s'ajoutent à la couleur.

L'étoile des favoris, elle, ne donnait que 2,15:1 sur du blanc : on distinguait
mal l'étoile pleine de l'étoile vide.

### Le garde-fou

`audit-coherence.mjs` gagne un huitième contrôle : **toute couleur écrite en dur
hors de la palette est une anomalie**, et tout jeton défini en clair doit l'être
en sombre. C'est exactement le défaut d'origine qui est visé — rustiner un
symptôme au lieu de soigner la cause. Contrôle éprouvé en réinjectant les deux
régressions : les deux sont attrapées.

## 2026-08-15 — Sept cases cochées, deux articles publiés
Signalé par l'auteur : sept articles retenus dans le rapport de veille du matin, deux
seulement parus sur le site. Les cinq manquants avaient **tous plus de 120 jours** —
2021, 2023, 2024, janvier 2026 — et une règle de péremption les écartait.

**Le défaut n'était pas la règle, c'était le silence.** Le système acceptait la
consigne, la jetait, et n'en disait rien : il fallait remonter jusqu'au code pour
comprendre où étaient passés cinq clics.

### Ce qui change

**La veille ne propose plus rien de plus de 120 jours.** C'est la cause racine :
Google News remonte volontiers de vieux articles quand une requête est peu couverte,
et rien ne les distinguait des nouveautés sans lire chaque date une par une. Un
article de 2021 n'aurait jamais dû figurer dans un rapport de veille.

**Le publieur nomme ce qu'il écarte**, avec la date et l'âge :

```
5 article(s) coché(s) mais écarté(s) — plus de 120 jours :
  · 2026-01-06 (222 j) — 3,15%* : la MACSF augmente le bon rendement…
  · 2021-04-06 (1958 j) — Ces chaînes YouTube à suivre en tant qu'entrepreneur
```

**Les deux scripts portent la même valeur**, et un commentaire dans chacun rappelle
qu'elle doit le rester : si la veille proposait plus vieux que ce que le site accepte,
l'auteur cocherait des articles qui ne paraîtraient jamais. C'est précisément ce qui
s'était produit.

### Une décision reprise

Première correction : supprimer la règle d'âge, au motif qu'une case cochée est une
décision éditoriale explicite. Les sept articles ont paru, dont un de 2021.

L'auteur a tranché, et l'argument est décisif : **un site qui annonce « les compétences
de demain » ne peut pas afficher un article de 2021 — la page se contredirait
elle-même.** La règle est rétablie ; seule la part réellement fautive, le silence, a
été corrigée. Les cinq articles périmés ont quitté le site au passage suivant.

Le test couvre désormais les deux moitiés de la règle : l'article périmé n'entre pas,
**et** l'écart est annoncé avec son titre et son âge. `scripts/test-actualites.mjs`
entre dans le dépôt à cette occasion.

## 2026-08-15 — Le script de copie sur clé n'avait jamais pu fonctionner
Mise à jour de la sauvegarde sur clé USB. Elle a échoué, et pour une raison qui
méritait d'être creusée : **le contrôle de santé du script refusait exactement ce
qu'il devait laisser passer.**

Deux défauts se cumulaient :

1. **`git bundle verify` exige d'être dans un dépôt.** Lancé par double-clic depuis
   le dossier de sauvegardes — l'usage prévu — il n'y en a aucun. La commande
   échouait quel que soit l'état du bundle. Elle s'exécute désormais dans un dépôt
   vide temporaire, ce qui ne dépend ni de l'emplacement du script, ni de la présence
   du projet.
2. **La commande écrit son compte rendu sur la sortie d'erreur même quand tout va
   bien** — « … is okay ». PowerShell 5.1 en fait des enregistrements d'erreur, et
   `$ErrorActionPreference = "Stop"` interrompait le script. Seul le code de retour
   fait foi maintenant.

C'est ce qui explique la copie faite à la main le 9 août : le script ne pouvait pas
aboutir.

Les invites « Appuie sur Entrée » bloquaient par ailleurs tout appel non interactif.
Elles ne se posent plus que si quelqu'un peut y répondre — le double-clic garde son
comportement.

### Le script n'était versionné nulle part

Il vivait sur le Bureau et sur la clé. Le correctif aurait disparu à la première
mésaventure, et rien n'aurait signalé sa perte. Il entre dans `scripts/`, et cherche
la sauvegarde aussi bien à côté de lui que depuis le dépôt — une seule copie sert
aux deux usages. Vérifié depuis les deux emplacements.

### Ce que portait la clé

| Emplacement | Avant | Après |
|---|---|---|
| `DocMaster-sauvegardes\` | rien | copie datée, **108 commits** |
| `Sauvegardes-DocMaster\` | bundle du 14/08, **85 commits** | remis à niveau |

L'ancien dossier portait **23 commits de retard** sous le nom le plus évident, et une
version du script d'avant le correctif : deux pièges pour le jour où l'on en aurait
eu besoin. Les deux sont à jour, rien n'a été supprimé.

La copie est vérifiée par empreinte SHA-256, puis par **restauration réelle** depuis
la clé : 108 commits, arbre de fichiers identique au projet.

## 2026-08-15 — Les premières actualités paraissent
La chaîne mise en place la veille a fonctionné de bout en bout, sans intervention :
deux cases cochées dans un rapport de veille, et les deux articles ont paru sur le
site dans la minute.

- **« Transformers en déclin : l'IA cherche des solutions innovantes »** — rattaché à
  *Qu'est-ce qu'un LLM ?*
- **« Investir en private equity : les meilleures plateformes en 2026 »** — rattaché à
  *Investir dans la durée*

Le robot a écrit `data/actualites.json`, régénéré la page **Actualités** et le bloc de
l'accueil, commité et poussé. Les deux liens « en rapport avec » pointent vers des
ancres qui existent, vérifié.

C'est le premier contenu du site qui change **sans qu'une ligne de code soit écrite**.
La rubrique de l'accueil, restée invisible tant que rien n'était retenu, est
apparue d'elle-même.

Corrigé au passage : une espace avant une virgule dans la description de la page
d'accueil, présente en trois exemplaires — elle datait de l'ajout du treizième
parcours.

## 2026-08-15 — La recherche affichait ses résultats dans l'ordre du fichier
Contrôle de la mise en ligne après la vérification complète. Tout était bien déployé —
76 fichiers identiques octet pour octet, les 64 pages en réponse — et un défaut est
apparu en cherchant un mot au hasard.

Chercher **« mesore »**, un mot-clé exact du guide Négociation, remontait d'abord deux
pages sans rapport : la tolérance aux fautes de frappe avait rapproché le mot de
« mesure », et rien ne départageait ensuite.

La cause : les résultats n'étaient **pas classés du tout**. Un `filter` sans tri, donc
l'ordre du fichier de données. À quarante entrées cela ne se voyait pas ; à
**deux cent trente-sept**, si.

La tolérance aux fautes doit rattraper une saisie approximative, **jamais passer
devant une saisie correcte**. Les résultats sont désormais classés :

| Rang | Ce qui le déclenche |
|---|---|
| 4 | Le mot exact figure dans le **titre** |
| 3 | Le mot exact figure dans les **mots-clés** |
| 2 | Le mot exact figure dans la **description** |
| 1 | Rattrapé par la tolérance aux fautes |

À pertinence égale, l'ordre du fichier est conservé — le tri de JavaScript est stable
depuis ES2019, et cet ordre suit les sujets puis les niveaux, ce qui reste le
classement le plus lisible.

`scripts/test-recherche.mjs` entre dans le dépôt. Il couvrait déjà le repliage des
accents et le surlignage ; il vérifie maintenant que les pertinences sortent bien
décroissantes, et que « phising » trouve toujours « Le phishing ».

### Une fausse alerte, pour mémoire

Après déploiement, le navigateur de test affichait encore l'ancien ordre. Ce n'était
pas le site : le fichier servi est identique au local, et rejoué avec un paramètre
anti-cache il classe correctement. C'était le cache du navigateur, qui se résorbe en
dix minutes (`max-age=600`). Vérifier le fichier servi plutôt que la page affichée
évite de corriger un problème qui n'existe pas.

## 2026-08-14 — Un simulateur en écrasait un autre, en silence
Vérification complète du site après la fin des quatre chantiers. Elle a trouvé un
défaut, et il était **invisible par construction**.

Le simulateur `choisir-statut`, écrit pour *Entrepreneuriat*, portait la même clé que
celui écrit des semaines plus tard pour *Droit & démarches*. JavaScript accepte deux
clés identiques dans un objet : **la seconde écrase la première, sans un mot**.

Depuis l'ajout du guide Droit, la section « Choisir son statut » d'Entrepreneuriat
affichait donc le questionnaire du Droit. Rien ne le signalait — un bloc était bien
présent, il répondait, il était simplement le mauvais. Ni `node --check`, ni
l'exécution, ni l'affichage ne peuvent attraper cela : **seule la lecture du texte
source le peut.**

Celui du Droit devient `micro-entreprise`. Les deux existent à nouveau.

### Deux garde-fous, parce qu'un seul n'aurait pas suffi

**`scripts/valider-js.js`** détecte désormais les clés répétées dans `pratique.js`,
contrôle que chaque simulateur est complet, et le fichier entre dans le hook
`pre-commit`. Vérifié en recréant le défaut : le commit est bien interrompu.

**`scripts/audit-coherence.mjs`** est un nouvel audit. Les deux existants portaient
sur la structure et sur la mise en ligne ; celui-ci porte sur la **cohérence interne
du contenu** :

| Contrôle | Ce qu'il attrape |
|---|---|
| Simulateurs | Défini et jamais posé, posé sans exister, posé deux fois |
| Structure | Niveau déclaré et absent, sections sans exercice |
| Anneau de navigation | Boucle courte, lien non réciproque, sujet hors de l'anneau |
| Index de recherche | Page de cours introuvable, titre en double |
| Chiffres annoncés | Un « 13 guides » resté quelque part |
| Dates | Date future, ou antérieure au projet |
| Accessibilité | Langue, titre unique, lien d'évitement, `rel="noopener"` |

C'est ce dernier audit qui a trouvé le défaut. Il tourne désormais avec les autres.

### Le reste de la vérification

0 anomalie partout ailleurs : 76 fichiers identiques en ligne, 70/70 liens externes
valides, 1 266 questions dans 42 banques, 45 fichiers JS de données tous chargeables
— `pratique.js` compris, désormais — et les trois suites de tests au vert.

Affichage vérifié en mode sombre sur 375 px : aucun débordement horizontal, contraste
du texte à 16,3:1. Sauvegarde vérifiée : historique complet, 101 commits.

## 2026-08-14 — Les quatre chantiers sont terminés
Récapitulatif. Les sept entrées qui suivent décrivent chacune une addition ; celle-ci
dit où en est le site, et ce que la feuille de route a réellement produit.

| | Avant | Aujourd'hui |
|---|---|---|
| Parcours | 9 | **14** |
| Pages de cours | 9 | **42** |
| Sections | 37 | **169** |
| Exercices interactifs | 0 | **168** |
| Questions de quiz | 276 | **1 266** |

<sub>Les pages de cours sont les niveaux eux-mêmes. En ajoutant les 14 sommaires de
parcours et les 8 pages du site, le total publié est de 64 pages.</sub>

**Chantier 1 — approfondir.** Chaque sujet passe d'une page de survol à trois niveaux
(débutant, intermédiaire, avancé) avec une page d'accueil qui annonce contenu, durée
et prérequis.

**Chantier 2 — faire pratiquer.** 168 exercices : **79 simulateurs de calcul** où l'on
saisit ses propres chiffres, et **89 contrôles à cocher**. Ce ne sont pas des
illustrations — le résultat change.

**Chantier 3 — rendre vivant.** La veille, qui tournait déjà deux fois par jour sans
que personne ne la voie, paraît maintenant sur le site — **après validation à la
main**, une case à cocher par article.

**Chantier 4 — élargir.** Cinq sujets ajoutés : apprentissage, droit et démarches,
santé au travail, sobriété numérique, négociation et communication. Les cinq pistes
annoncées dans la boîte à idées sont toutes publiées.

### Ce qui a réellement coûté

Le découpage lui-même s'est révélé bon marché : après le sujet pilote, chaque parcours
n'a demandé que **trois lignes de déclaration** dans `parcours.js`. Ce qui a coûté,
c'est tout ce qui comptait les sujets ailleurs — le texte alternatif de l'image de
partage sur chaque page, deux énumérations en prose, trois compteurs d'Issues.

**Une méthode a émergé et tient :** écrire les simulateurs d'abord, exécuter, puis
recopier leurs sorties dans le cours. L'ordre inverse avait produit quatre erreurs sur
les neuf premiers sujets ; l'ordre correct les rend impossibles.

**Trois règles de prudence** ont été posées et documentées dans `ARCHITECTURE.md` :
ne citer aucune valeur révisée chaque année (droit), n'évaluer aucun état de santé
(santé au travail), et ne calculer que ce qui se calcule (sobriété numérique).

## 2026-08-14 — Un quatorzième parcours : Négociation &amp; communication
**Dernier des cinq thèmes annoncés dans la boîte à idées.** Ils sont désormais tous
publiés.

- **Débutant** — préparer avant de parler, écouter vraiment, structurer un message,
  écrire pour être lu
- **Intermédiaire** — la solution de rechange, la zone d'accord, l'ancrage, positions
  et intérêts
- **Avancé** — les conversations difficiles, les biais, reconnaître la manipulation,
  savoir s'arrêter

12 simulateurs et 90 questions. Le site passe à **64 pages, 169 sections,
168 exercices et 1 266 questions**.

**Un domaine saturé de mythes.** Le plus tenace — « 93 % de la communication est non
verbale » — est corrigé explicitement : l'étude de Mehrabian portait sur des **mots
isolés dont le ton contredisait le sens**, et mesurait la perception d'une *attitude*,
pas la transmission d'une information. La conséquence pratique est l'inverse de celle
qu'on en tire habituellement : le contenu compte.

Le niveau intermédiaire se calcule entièrement. MESORE, zone d'accord et ancrage se
traduisent en arithmétique vérifiable, et les exemples du cours sont recopiés de la
sortie des simulateurs.

Les procédés du niveau avancé sont décrits **pour être reconnus, pas employés**, et le
guide renvoie vers *Santé au travail* pour ce qui ne relève pas de la négociation mais
du recours — harcèlement, discrimination, pressions.

Deux cas limites corrigés : une zone d'accord de largeur nulle affichait « le partage
de ces 0 € », et l'arrondi à la minute rendait identiques un temps de lecture et sa
moitié.

### La boîte à idées repart de zéro

Les cinq pistes annoncées étant toutes publiées, la page ne montrait plus qu'une
**liste vide** et un menu déroulant à une seule entrée. La section dit maintenant ce
qu'elle est, le menu est retiré, et la suite dépend entièrement des propositions
reçues.

## 2026-08-14 — Un treizième parcours : Écologie &amp; sobriété numérique
Quatrième sujet du chantier « élargir ». Piège propre au domaine : **les chiffres qui
circulent sont massivement faux**. « Un mail = 10 g » et « une heure de streaming =
3,2 kg » ont été repris pendant des années par des sources sérieuses avant d'être
corrigés d'un facteur dix.

Le parcours prend donc le problème à l'envers : il établit d'abord **où** se trouve
l'impact — la fabrication des terminaux, ce qui est solidement documenté — avant de
parler de gestes. Et il consacre une section entière à savoir écarter un mauvais
chiffre.

- **Débutant** — la fabrication, allonger la durée de vie, les gestes symboliques,
  bien acheter
- **Intermédiaire** — lire un chiffre d'impact, le streaming, qui pèse quoi, le
  déplacement évité
- **Avancé** — l'écoconception, le parc en entreprise, le cadre réglementaire,
  l'effet rebond

12 simulateurs et 90 questions. Le site passe à **60 pages, 157 sections,
156 exercices et 1 176 questions**.

**Règle des calculs : ne calculer que ce qui se calcule.** La consommation d'un
appareil (watts × heures) et l'intensité carbone de l'électricité sont solides ;
l'énergie par gigaoctet transféré varie d'un facteur dix selon les études et diminue
vite — elle est donc un **champ de saisie**, jamais une constante cachée dans une
formule.

Deux défauts trouvés aux cas limites et corrigés : un écart affiché « × 0 » quand
l'écran comparé est plus gourmand, et une « économie » négative quand on raccourcit
un renouvellement au lieu de l'allonger.

## 2026-08-14 — La veille dépassait la limite d'une Issue GitHub
La veille du soir a échoué : avec treize sujets et 157 sous-sections, le rapport
atteignait plus de **65 536 caractères**, la limite d'un corps d'Issue. Le passage
entier tombait — aucun article proposé.

Le rapport se découpe désormais en autant d'Issues que nécessaire, **sans jamais
couper un guide en deux**, chaque partie portant sa propre charge utile. Sur l'état
actuel du site : deux Issues, 76 articles proposés.

**Trois compteurs devenaient faux du même coup**, parce qu'ils comptaient en Issues
et qu'un passage n'en produit plus une seule :

| Compteur | Avant | Conséquence si rien n'était fait |
|---|---|---|
| Déduplication | 20 Issues | Mémoire réduite à 2 jours et demi : les mêmes articles revenaient |
| Fermeture automatique | 50 Issues | Moins que ce qu'une période de 14 jours produit |
| Publication | 30 Issues | Une case cochée sur un rapport de plus de 4 jours n'aurait jamais été vue |

Les trois passent à 100, le maximum de l'API. Un test rejoue la chaîne complète hors
ligne et vérifie qu'aucune Issue ne dépasse la limite — **c'est ce test qui manquait**,
le rapport ayant grossi sujet après sujet sans que rien ne le signale avant l'échec.

## 2026-08-14 — Un douzième parcours : Santé &amp; bien-être au travail
Troisième sujet du chantier « élargir », et le plus sensible : il touche à la santé,
et une page web n'a aucune légitimité à évaluer celle de qui que ce soit.

- **Débutant** — régler son poste, la sédentarité, la fatigue visuelle, les pauses
  qui récupèrent
- **Intermédiaire** — stress aigu et chronique, exigence et latitude, la
  récupération, la déconnexion
- **Avancé** — la médecine du travail, les obligations de l'employeur, l'épuisement
  professionnel, les situations graves

12 simulateurs et 90 questions. Le site passe à **56 pages, 145 sections,
144 exercices et 1 086 questions**.

### La règle tenue partout : aucun exercice n'évalue un état de santé

Les questionnaires portent sur des **conditions de travail** et sur des **démarches**
— jamais sur des symptômes totalisés en un score. Le contrôle sur l'épuisement le dit
explicitement, ne rend aucun résultat, et oriente vers un médecin.

Un score de santé mentale rendu par une page web peut rassurer à tort quelqu'un qui
va mal, ou inquiéter durablement quelqu'un qui va bien. Aucune des deux erreurs n'est
acceptable. Le **3114** — numéro national de prévention du suicide, gratuit et
disponible 24 h sur 24 — figure sur le parcours et sur le niveau avancé.

Les quatre calculs s'appuient sur des références publiques et stables : 150 minutes
d'activité hebdomadaire (OMS), 11 heures et 35 heures de repos et 20 minutes de pause
(code du travail), et le modèle de Karasek pour l'exigence et la latitude.

L'écart avec le guide Productivité est assumé et rappelé sur le parcours : **l'un
organise le travail, l'autre évite de s'y abîmer.**

### Une duplication supprimée plutôt que recopiée

La phrase qui énumérait les domaines dans « À propos » et dans la FAQ a dû être
corrigée à la main à chaque nouveau guide — et s'est trouvée fausse entre-temps.
Elle renvoie désormais à la page d'accueil, seul endroit où la liste est tenue à jour.

## 2026-08-14 — Un onzième parcours : Droit &amp; démarches administratives
Deuxième sujet du chantier « élargir », et le plus délicat : le droit vieillit vite,
et ce qui paraît sur le site engage son éditeur.

- **Débutant** — où trouver le droit applicable, les délais qui comptent, écrire pour
  que ça compte, conserver ses documents
- **Intermédiaire** — louer un logement, donner congé, le contrat de travail,
  déclarer une activité
- **Avancé** — lire un contrat, la prescription, régler sans juge, vos données
  personnelles

12 simulateurs et 90 questions. Le site passe à **52 pages, 133 sections,
132 exercices et 996 questions**.

### Deux règles de prudence, tenues d'un bout à l'autre

**Aucun montant, seuil ni plafond n'est cité.** Seuils de la micro-entreprise,
plafonds de l'aide juridictionnelle, SMIC : ces valeurs sont révisées chaque année.
Un chiffre périmé dans un guide juridique est pire qu'une absence de chiffre — le
guide renvoie chaque fois à la source officielle.

**Seuls figurent des délais inscrits dans la loi et stables depuis des années** :
14 jours de rétractation, 2 ans de garantie légale, 10 % de majoration sur un dépôt
de garantie rendu en retard, délais de prévenance, prescriptions de principe.

Les avertissements le disent explicitement, sur chaque page : droit français,
contenu pédagogique, pas un conseil juridique — et les points-justice donnent des
consultations gratuites.

### Et un défaut du robot, corrigé au passage

La publication des actualités a produit ce matin un commit dont le seul contenu était
un horodatage : `maj` datait le passage du script, pas le dernier changement de la
liste. Chaque exécution réécrivait donc le fichier, commitait, et relançait la
publication du site — **deux fois par jour, pour rien**. `maj` date désormais le
dernier changement réel, et un test couvre le cas.

## 2026-08-14 — Un dixième parcours : Apprendre à apprendre
Premier sujet du chantier « élargir ». Choisi parmi les cinq pistes annoncées dans
la boîte à idées parce que c'est le seul qui **compose avec les neuf autres** : il
sert à mieux lire tout le reste du site.

- **Débutant** — la courbe de l'oubli, la répétition espacée, l'effet test, les
  illusions de maîtrise
- **Intermédiaire** — l'entrelacement, l'élaboration, la pratique délibérée, le
  sommeil et la consolidation
- **Avancé** — la fréquence lexicale, le transfert, évaluer une méthode, construire
  son système

12 simulateurs et 90 questions supplémentaires. Le site passe à **48 pages, 121
sections, 121 exercices et 906 questions**.

**Méthode inversée cette fois.** Les simulateurs ont été écrits et exécutés *avant*
le cours, et les chiffres du cours recopiés de leur sortie. C'est la réponse directe
aux quatre erreurs trouvées pendant le chantier précédent en procédant dans l'autre
sens. Les constantes de mémoire — pente de l'oubli, intervalles d'espacement, écarts
mesurés — sont regroupées en tête de `pratique.js` avec leur source, plutôt que
recopiées dans chaque formule.

**Le passage de neuf à dix sujets touchait 45 pages** : le texte alternatif de
l'image de partage annonçait « 9 guides gratuits » partout, et trois pages
énuméraient les domaines en clair.

### Et un défaut que ce changement a révélé

Ce même passage a fait basculer les **36 pages de guide au 14 août**, parce qu'il
touchait une balise commune de leur `<head>`. Rien n'avait bougé pour le lecteur,
et trente-six pages annonçaient une mise à jour du jour — précisément le mensonge
que le datage automatique existe pour empêcher.

`scripts/dater-guides.js` compare désormais le contenu entre `<main>` et `</main>`
avec la version enregistrée dans le dépôt, et laisse la date en place si rien n'a
changé sur le fond. Les 36 dates faussées ont été rétablies.

## 2026-08-14 — La veille paraît sur le site, après validation à la main
Le site ne bougeait pas entre deux ajouts de contenu, alors qu'une veille tournait
déjà deux fois par jour et trouvait des articles pertinents — qui finissaient dans
un rapport que personne d'autre ne voyait.

- Nouvelle page **[Actualités](actualites.html)**, et un aperçu des trois derniers
  articles sur la page d'accueil
- Chaque article est **rattaché à la section de guide qu'il prolonge** : c'est ce qui
  ramène le lecteur vers le fond après l'actualité, plutôt que de l'envoyer ailleurs
- La page est **générée en HTML statique**, pas chargée en JavaScript : elle reste
  lisible sans script, et indexable

**Rien ne paraît sans un geste explicite.** Chaque article proposé par la veille est
désormais une case à cocher dans le rapport. Cocher publie l'article dans la minute
qui suit ; décocher le retire.

Ce n'est pas de la prudence excessive : une recherche automatique remonte aussi des
articles promotionnels, des contenus payants et parfois des contre-vérités. Les faire
paraître sans les lire engagerait l'éditeur du site sur des textes que personne n'a
ouverts. La case à cocher coûte un clic.

**Un bug de tout le site, révélé par le septième lien de navigation.** Tant que la
police de secours est appliquée, les liens sont plus larges : à sept entrées, ils
passaient sur deux lignes et la barre montait à 126 px avant de retomber à 70 quand
Poppins arrivait. Or `load` se déclenche **avant** ce basculement et
`document.fonts.ready` se résout trop tôt — les deux garde-fous posés en août.
Le décalage d'ancre restait figé à 138 px pour une barre de 70, soit **56 px de titre
cachés sur toutes les pages**. Une surveillance de trois secondes, qui s'arrête dès
que la hauteur ne bouge plus, corrige le cas.

Deux affirmations de la FAQ étaient devenues fausses : elle renvoyait les demandes de
réutilisation vers le dépôt GitHub — que les visiteurs ne doivent pas pouvoir écrire —
et annonçait des guides de 1 700 à 2 200 mots, alors que la fourchette réelle est de
1 400 à 2 200 depuis le découpage en niveaux.

## 2026-08-13 — Les neuf guides deviennent neuf parcours en trois niveaux
Fin du premier des quatre chantiers. Le site proposait **neuf pages de survol** ;
il propose désormais **vingt-sept pages de cours** organisées en progression.

- Chaque sujet se décompose en **Débutant · Intermédiaire · Avancé**, avec une page
  d'accueil qui annonce le contenu de chaque niveau, sa durée et ses prérequis.
  Un niveau se lit seul, mais suppose acquis ce qui précède
- **109 exercices interactifs** répartis sur les vingt-sept pages : 53 simulateurs
  de calcul et 56 contrôles à cocher. Ce ne sont pas des illustrations — on y saisit
  ses propres chiffres, et le résultat change
- **816 questions** de quiz, renouvelées par moitié toutes les deux semaines
- La structure a été **fixée avant d'écrire la moindre ligne** (`ARCHITECTURE.md`).
  Dix mécanismes du site dépendaient de l'ancien découpage ; les avoir adaptés une
  fois sur le sujet pilote a suffi — les huit suivants n'ont demandé que trois lignes
  de déclaration chacun
- Un fichier unique, `parcours.js`, décrit qui a quels niveaux. Sans lui, le compteur
  de « Mon espace » aurait été figé dans le code et serait devenu faux au premier
  sujet découpé — **sans cesser de paraître plausible**

**Confronter chaque exemple du cours à son simulateur a révélé quatre erreurs**
qu'aucune relecture n'aurait attrapées :
- En **Finance**, deux exemples de la même page ne capitalisaient pas de la même
  façon — annuellement d'un côté, mensuellement de l'autre. Les deux chiffres étaient
  défendables séparément ; ensemble, ils se contredisaient
- En **Design**, le cours affirmait que regrouper vingt éléments en quatre familles
  accélère le choix. La formule dit l'inverse : deux décisions coûtent deux temps de
  réaction. **C'était le simulateur qui avait raison**, le cours a été corrigé
- En **Productivité**, quarante-cinq messages traités au fil de l'eau donnaient
  4 h 08 et non 3 h 45
- Et une division posée de tête donnait « 19 mois » là où le quotient valait 20

Un détail attrapé juste avant publication : une **virgule manquante** dans l'index de
recherche aurait rendu le fichier invalide et **supprimé la recherche du site entier**.
Rien ne l'aurait signalé — les pages se seraient affichées normalement.

`scripts/valider-js.js` **charge désormais réellement** l'index de recherche, le fichier
des parcours et les vingt-sept banques de questions avant chaque commit, et vérifie au
passage que chaque entrée pointe vers un fichier qui existe. Contrairement au contrôle
des dates, **celui-ci interrompt le commit** : une date figée est gênante, une fonction
du site cassée pour tous les visiteurs l'est davantage.

## 2026-08-09 — Navigation réordonnée, en haut comme en bas
- Nouvel ordre : **Accueil · Glossaire · Boîte à idées · FAQ · À propos · Mon espace**
- Le **pied de page** suivait son propre ordre : un lien ne se cherchait pas au même
  endroit selon qu'on regardait le haut ou le bas de la page. Il reprend désormais celui
  de la barre de navigation. Deux différences assumées — « Accueil » n'y figure pas, le
  logo y mène déjà, et les mentions légales ferment la liste comme il est d'usage
- **Correction d'une régression du correctif de la veille.** La hauteur de la barre était
  mesurée trop tôt, avant que la feuille de style ne soit appliquée : 126 px au lieu de
  70, et le titre de section visé descendait d'autant. Les visiteurs sans le CSS en
  cache — donc au premier passage — étaient concernés
- Les deux garde-fous prévus n'avaient rien rattrapé : `document.fonts.ready` se résout
  trop tôt, et le `ResizeObserver` **ne se déclenche pas du tout** sur certains
  navigateurs. La mesure se fait maintenant aussi au chargement complet de la page,
  et c'est celle-là qui fait foi

## 2026-08-09 — Copie de sauvegarde vérifiée sur clé USB
- Un script dépose la sauvegarde sur la clé, la **date** au lieu de l'écraser, et
  **compare les empreintes** pour confirmer que la copie est fidèle
- La vérification n'est pas du zèle : une copie interrompue — clé retirée trop tôt —
  produit un fichier de taille plausible et parfaitement illisible. Rien ne le signale,
  sauf le jour où l'on en a besoin
- Le script refuse de copier une sauvegarde qui ne passerait pas le contrôle de git,
  pour ne pas laisser deux exemplaires inutilisables au lieu d'un
- Copie du 9 août vérifiée par restauration **depuis la clé** : 63 commits, arbre des
  fichiers identique au dépôt

## 2026-08-09 — Un rapport d'usage lisible, chaque lundi
- Le tableau de bord affichait les gestes mesurés en vrac, mêlés aux pages et sous leur
  nom technique : `section/finance/les-etf` ne se lit pas. Un rapport hebdomadaire est
  désormais publié automatiquement, comme la veille
- Trois classements — guides, sous-sections ouvertes, sous-sections gardées — et surtout
  **un croisement** : le rapport entre « mise en favori » et « ouverte » dit si une
  section tient sa promesse. Très ouverte et jamais gardée, le sujet attire mais le texte
  déçoit ; c'est celle-là qu'il faut réécrire
- Les titres sont lus dans les guides eux-mêmes : ajouter une section suffit à la faire
  apparaître, sans toucher au rapport
- Deux garde-fous contre les fausses évidences : une section ouverte moins de trois fois
  n'entre pas dans le croisement, et les deux listes ne se recouvrent jamais — sur cinq
  sections, un « top 5 » et un « flop 5 » auraient affiché deux fois les mêmes lignes en
  ordre inverse, donnant l'illusion d'une analyse
- Le script vérifie la clé d'accès avant de s'en servir, et nomme la cause exacte en cas
  d'échec plutôt que de renvoyer un code d'erreur opaque

> Ce rapport ne concerne que l'éditeur du site : il n'apparaît nulle part pour les
> visiteurs, et ne contient aucune donnée permettant d'identifier qui que ce soit.

## 2026-08-09 — Savoir ce qui est lu à l'intérieur des guides
- Les statistiques comptaient les **pages** vues, donc les guides les plus consultés.
  Elles ne pouvaient rien dire de ce qui se passe **dans** un guide : les sous-sections
  sont des blocs dépliables d'une même page, pas des pages
- Trois gestes sont désormais comptés, par guide **et par sous-section** : ouvrir une
  section, ajouter un favori, marquer un guide comme lu. De quoi savoir quel sujet
  retient vraiment l'attention, et lequel est ouvert puis abandonné
- Seul le nom du geste est transmis. Aucun identifiant, aucun cookie, et **le contenu
  des favoris ne quitte pas le navigateur** : on compte qu'une section a été mise en
  favori, jamais par qui ni avec quoi d'autre
- Rouvrir une section ne la recompte pas — sans quoi un lecteur qui replie et déplie
  passerait pour dix
- **Les ouvertures en masse ne comptent pas non plus.** « Tout déplier » et l'impression
  ouvrent les cinq sections d'un coup : les compter aurait enregistré un intérêt pour
  chacune alors que le lecteur n'en a désigné aucune. Un seul clic aurait fait paraître
  toutes les sections également lues, et le classement n'aurait plus rien voulu dire
- Mentions légales et FAQ décrivent cette mesure, faute de quoi elles auraient cessé
  d'être exactes

## 2026-08-09 — La date de mise à jour dit enfin la vérité
- **Les 9 guides annonçaient le 7 août alors qu'ils avaient changé six fois depuis** —
  sections repliées, quiz par sous-section, boutons favori. La date était écrite à la
  main dans chaque page : rien ne pouvait la faire bouger. Une date de mise à jour
  fausse est pire qu'absente, puisque c'est justement ce que le lecteur vient y vérifier
- Elle est désormais **posée automatiquement** à chaque modification d'un guide.
  Modifier la feuille de style ne fait pas mentir les neuf pages : seuls les guides
  réellement touchés sont datés

## 2026-08-09 — Un seul canal de contact
- Le site ne renvoie plus vers l'espace **Issues du dépôt**, ni depuis les mentions
  légales ni depuis la FAQ. L'adresse électronique devient le point de contact unique,
  ce que la LCEN et le RGPD acceptent sans réserve : ils exigent un moyen de contact,
  pas celui-là en particulier
- La FAQ gagne en échange un conseil utile — indiquer le guide et la section concernés,
  c'est ce qui permet de corriger le plus vite

## 2026-08-09 — Mentions légales : hébergeur vérifié, conservation annoncée
- **Durée de conservation des suggestions portée à la connaissance du visiteur.** Les
  24 mois étaient fixés dans les mentions légales, et nulle part ailleurs. L'article 13
  du RGPD veut que la personne soit informée au moment où ses données sont recueillies,
  pas sur une page qu'elle devra penser à ouvrir : la mention figure désormais **sous le
  formulaire lui-même**, et dans la FAQ
- La question « Quelles données sont collectées ? » ne parlait que des statistiques
  agrégées et laissait croire que rien d'autre n'était conservé. L'exception est nommée
- **Coordonnées de l'hébergeur vérifiées aux sources de GitHub.** Adresse et numéro sont
  exacts ; la graphie de l'adresse est alignée sur celle de la déclaration officielle
- GitHub ne publie plus ce numéro dans sa documentation courante et traite ses demandes
  par écrit. Le numéro reste mentionné — l'article 6 III de la LCEN l'exige — mais le
  lien vers le portail d'assistance est ajouté, car c'est la voie réellement ouverte

## 2026-08-09 — Vérification complète : trois correctifs
- **Recherche insensible aux accents.** « securite » ou « cybersecurite » ne renvoyaient
  rien : le moteur ne faisait que passer le texte en minuscules. La tolérance aux fautes
  de frappe rattrapait un accent manquant, mais pas deux. Sur un site en français dont la
  moitié des titres portent des accents, alors que personne n'en saisit dans une barre de
  recherche. Le mot reste affiché correctement accentué dans les résultats
- **Titre de section à nouveau masqué entre 700 et 840 px de large.** La barre de
  navigation passe sur deux lignes dès qu'elle manque de place, bien avant le seuil
  mobile : elle mesurait 123 px pendant que la compensation en valait 84, laissant 40 px
  du titre cachés. Une tablette en portrait était concernée. La hauteur est désormais
  mesurée, plus devinée
- L'historique de recherche était réinséré dans la page comme du balisage. C'est une
  saisie libre : il est maintenant posé comme du texte

## 2026-08-09 — Les pages d'information décrivent enfin le site réel
- **FAQ** : deux comportements n'étaient expliqués nulle part alors qu'ils surprennent au
  premier abord — pourquoi les sections des guides sont repliées, et pourquoi les
  questions des quiz changent toutes les deux semaines sans que recharger la page n'y
  fasse rien. 24 questions désormais
- **À propos** : la page décrivait un site qui n'existait plus. Elle expose maintenant la
  trame commune des guides, la veille et la rotation des quiz, et l'absence de compte,
  de cookie et de publicité

## 2026-08-09 — Boîte à idées : envoi direct, et plus aucun cookie
- La suggestion **part directement depuis la page**, sans quitter le site et sans logiciel
  de messagerie. Un seul bouton, aucune adresse demandée au visiteur
- Google Forms est abandonné au profit d'un relai vers la boîte de l'éditeur. **Le site ne
  dépose désormais aucun cookie, sans exception** — c'était la dernière entorse
- Le système de vérification du relai est volontairement désactivé : il aurait rechargé
  Google. Un champ piège invisible le remplace, sans aucun script tiers
- L'adresse de destination n'apparaît nulle part dans la page, remplacée par un identifiant
- Mentions légales et FAQ mises à jour : plus de transfert hors UE, plus de cookie tiers

> Une première version passait par le logiciel de messagerie du visiteur. Abandonnée :
> sur ordinateur, beaucoup n'en ont aucun de configuré, et le clic ne produisait rien.

## 2026-08-09 — Mon espace et favoris
- **Bouton favori** sur les 9 catégories et les 37 sous-sections
- Nouvelle page **Mon espace** : favoris regroupés par guide, guides terminés, progression
- Aucun compte, aucun mot de passe, aucune adresse : tout reste dans le navigateur du
  visiteur, comme le thème ou la progression de lecture
- Bouton « Tout effacer » pour reprendre la main sur ces données

## 2026-08-08 — Sauvegarde automatique du dépôt
- Après **chaque commit**, le dépôt entier — site et historique — est enregistré dans un
  fichier unique, hors du dossier du projet. Rien à lancer à la main
- La sauvegarde n'est remplacée que si elle passe **trois contrôles** : le fichier se
  crée, git le juge intègre, et le dernier commit s'y trouve réellement. Sinon la
  précédente est conservée — une sauvegarde corrompue est pire que pas de sauvegarde
- Le troisième contrôle vient d'une mésaventure du jour même : une sauvegarde jugée
  « valide » par git s'est révélée **impossible à restaurer**. La commande de
  vérification contrôle la cohérence de ce que le fichier contient, pas ce qui aurait dû
  s'y trouver
- La leçon dépasse ce projet : **une sauvegarde ne vaut que si on l'a restaurée au moins
  une fois**

> Ce mécanisme vit hors du dépôt public : il contient un chemin local.

## 2026-08-08 — Le thème suit l'appareil du visiteur
- Le site s'affiche en sombre si l'appareil est en sombre, en clair sinon
- Le choix fait via le bouton reste prioritaire et n'est jamais écrasé
- Suivi en direct : basculer son système pendant la lecture fait suivre la page

## 2026-08-08 — Un quiz par sous-section, renouvelé tous les 15 jours
- **276 questions** réparties sur 37 quiz de sous-section et 9 quiz de synthèse
- Chaque banque contient 6 questions dont 3 affichées : les 3 autres prennent le relais
  toutes les deux semaines, automatiquement
- Aucun doublon sur l'ensemble du site, et aucun chevauchement entre un quiz de synthèse
  et ceux de ses sections
- Chaque question porte une **explication**, révélée seulement après la réponse
- Séparation visuelle nette entre le cours et l'exercice, et cases de réponse lisibles
  dans les deux thèmes

## 2026-08-08 — La veille suit le contenu des guides
- Les recherches ne sont plus écrites en dur : le script **lit les guides** et construit
  une recherche par sous-section. Ajouter une section à un guide suffit désormais à la
  faire entrer dans la veille
- **37 recherches au lieu de 9** — les mots-clés figés ne couvraient qu'un tiers des
  sous-sections réelles ; le guide Cybersécurité traitait du phishing et du chiffrement
  pendant que la veille ne cherchait que « vulnérabilité » et « piratage »
- Le rapport est désormais classé par guide puis par sous-section, avec un lien direct
  vers la section concernée du site

## 2026-08-08 — Lecture et navigation
- Les **37 sections de cours** des 9 guides sont désormais **repliées** : avec 1 700 à
  2 200 mots par guide, tout afficher d'un coup présentait un mur de texte. Sur le guide
  Data, la page passe de 9 521 à 3 794 pixels de haut
- Bouton « Tout déplier / Tout replier », et ouverture automatique de la section visée
  par un lien du sommaire ou un résultat de recherche
- Correction du décalage d'ancre : la barre de navigation masquait 90 pixels du contenu,
  dont le titre de la section visée
- **Barre de navigation mobile resserrée** : de 305 à 91 pixels, soit 11 % de l'écran
  au lieu de 38 %. Les liens tiennent sur une ligne et défilent horizontalement
- L'impression d'un guide reste complète malgré les sections repliées

## 2026-08-08 — Divers
- L'accroche de la page d'accueil devient « pour apprendre **et comprendre** les
  **compétences** de demain » — le mot « technologies » ne décrivait ni la finance,
  ni le marketing, ni l'entrepreneuriat
- Retrait du dépôt public d'un fichier de configuration local qui exposait le nom
  d'utilisateur Windows de l'éditeur, alors que le site est publié sous pseudonyme.
  Historique nettoyé et `.gitignore` ajouté pour éviter que cela se reproduise

## 2026-08-08 — Accessibilité des illustrations
- Les 9 illustrations SVG sont déclarées **décoratives** (`aria-hidden`, `role="presentation"`,
  `focusable="false"`) : elles n'apportent aucune information que le titre ne donne déjà,
  et sont d'ailleurs masquées sur mobile
- Ajout du respect de `prefers-reduced-motion` : les quatre animations en boucle infinie
  (rotation, rebond, scintillement, pulsation) se figent quand le système signale que
  l'utilisateur souhaite réduire les animations
- Veille : le vivier d'articles lus passe de 4 à 15 par catégorie ; la déduplication vidait
  les rapports au bout de quelques jours

## 2026-08-07 — Enrichissement des 9 guides
- Contenu multiplié par 4 : les guides passent de 420–750 mots à **1 650–2 240 mots**
- Chaque notion s'accompagne désormais d'un **exemple chiffré** et d'une **erreur fréquente**
- Ajout de tableaux comparatifs, de sous-sections et de ressources commentées
- Guide Finance : avertissement explicite sur son caractère pédagogique et non prescriptif
- Nouveaux styles pour le contenu long : encadrés exemple/piège/à-retenir, tableaux, extraits de code
- Suppression de l'effet de survol sur les blocs de cours, gênant sur des textes longs

## 2026-08-07 — Correction de l'aperçu de partage
- Image de partage 1200×630 (`assets/img/og-image.png`) : `og:image` pointait vers un favicon SVG
  en chemin relatif, que les réseaux sociaux ne savent pas afficher
- Balises Open Graph et Twitter Card complètes et absolues sur les 16 pages
- Ajout de `canonical`, `og:url`, `og:locale` ; balises étendues aux 4 pages qui n'en avaient aucune

## 2026-08-07 — Passage en gestion Git
- Nouvelle page **FAQ** : 19 questions réparties en 4 thèmes, dépliables, avec filtre de recherche
- Le site est renommé « DocMaster » (au lieu de « DocMaster AI »)
- Statistiques d'audience GoatCounter activées sur toutes les pages, sans cookie
- Éditeur du site renseigné dans les mentions légales
- Correction d'un déploiement incomplet : `layout.js`, `enhance.js`, `quiz.js` et le favicon
  étaient référencés par les pages sans avoir été publiés, ce qui supprimait la barre de
  navigation et le pied de page du site en ligne
- Le projet est désormais versionné avec Git et publié par `git push`

## 2026-08-07 — Mise à jour majeure
- Refonte de la maintenabilité : navbar et footer désormais uniques (`assets/js/layout.js`), fini le copier-coller sur chaque page
- Ajout du favicon et des balises Open Graph (partage réseaux sociaux)
- Ajout de `sitemap.xml` et `robots.txt` pour le référencement
- Page 404 personnalisée
- Accessibilité : lien d'évitement, `aria-label`, focus clavier visible
- Fil d'Ariane sur chaque guide
- Sommaire cliquable en haut de chaque guide
- Encadré "Points clés à retenir" sur chaque guide
- Quiz interactif de fin de guide (3 questions par guide)
- Case "Marquer comme lu" avec sauvegarde locale
- Navigation "Guide précédent / suivant" et "Guides similaires"
- Bouton "Copier le lien" et indicateur "Dernière mise à jour"
- Barre de progression de lecture et bouton "Retour en haut"
- Recherche améliorée : tolérance aux fautes de frappe, surlignage, raccourci clavier `/`, historique
- Nouvelle page Glossaire centralisant les termes techniques
- Nouvelles pages "À propos" et "Mentions légales"
- Styles d'impression (`@media print`)
- Amélioration du script de veille : déduplication des articles déjà proposés

## Antérieur
- Création du site avec 9 guides thématiques
- Mode sombre, design responsive, illustrations SVG animées
- Recherche, mise en ligne sur GitHub Pages
- Mise en place de la veille automatique bi-quotidienne
