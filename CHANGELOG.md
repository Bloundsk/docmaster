# Changelog — DocMaster

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
