# Architecture de contenu — Clicked

Ce document fixe la structure du site **avant** d'écrire le contenu. Il existe
parce que huit mécanismes dérivent aujourd'hui du chemin `guides/<sujet>/index.html` :
favoris, mesure d'usage, recherche, Mon espace, quiz, veille, rapport d'usage et
le hook de datation. Décider de la structure après avoir produit le contenu
obligerait à tout reprendre — le contenu comme le code.

---

## 1. Le constat de départ

État au 10 août 2026 : **16 419 mots, 1 h 22 de lecture pour le site entier**,
neuf sujets de 8 à 11 minutes chacun. Un visiteur motivé en fait le tour en une
soirée et n'a plus de raison de revenir.

L'outillage, lui, est dimensionné pour un site dix fois plus gros : quiz à
rotation, favoris, espace personnel, mesure par sous-section, rapport
hebdomadaire, veille quotidienne. **C'est la matière qui manque, pas la machine.**

Le cahier des charges prévoit depuis l'origine trois publics — débutants,
intermédiaires, avancés. Le site n'en sert qu'un seul niveau, indifférencié.

---

## 2. Les quatre chantiers

| | Chantier | Ce qu'il apporte |
|---|---|---|
| 1 | **Approfondir** | Trois niveaux par sujet, une progression, un « et maintenant ? » |
| 2 | **Faire pratiquer** | Exercices et simulateurs : on n'acquiert pas une compétence en lisant |
| 3 | **Rendre vivant** | La veille devient des actualités publiées : il se passe quelque chose |
| 4 | **Élargir** | De nouveaux sujets, une fois le modèle éprouvé |

### Pourquoi cet ordre

**Approfondir en premier** parce que c'est le chantier qui touche le modèle de
contenu lui-même. Tout le reste s'y accroche.

**Pratiquer ensuite**, car un exercice vit à l'intérieur d'une leçon : il faut
que la leçon ait sa forme définitive.

**Rendre vivant en troisième** : les actualités sont un type de contenu séparé,
purement additif. Elles ne peuvent rien casser si l'architecture leur réserve
leur place dès maintenant — ce que fait ce document.

**Élargir en dernier**, par définition. Ajouter des sujets avant que le modèle
soit éprouvé, c'est se condamner à reprendre chacun d'eux.

---

## 3. Le modèle de contenu

### Adresses

```
guides/<sujet>/index.html          sommaire du parcours, porte d'entrée
guides/<sujet>/debutant.html       niveau 1
guides/<sujet>/intermediaire.html  niveau 2
guides/<sujet>/avance.html         niveau 3

index.html                         les nouveautés : guides mis à jour,
                                   derniers épisodes, lectures repérées
guides.html                        la liste des quatorze parcours
actualites.html                    les articles retenus, page unique générée
podcasts.html / podcast.xml        les épisodes, et leur flux
```

**Une seule page d'actualités, générée.** Une page par article aurait multiplié
les adresses pour du contenu qui n'est pas le nôtre, et qui disparaît au bout de
quelques mois.

**Les parcours ne sont plus sur l'accueil** depuis le 30 août 2026 : rien dans la
navigation n'y menait, et on ne savait pas où les trouver. L'accueil montre ce
qui a bougé ; `guides.html` porte la liste.

Un fichier par niveau plutôt qu'une page unique très longue. Trois raisons :

- un guide fait déjà 2 000 mots ; trois niveaux sur une page en feraient 8 000,
  soit le mur de texte que les sections repliées avaient précisément écarté ;
- trois pages distinctes répondent à trois intentions de recherche différentes,
  là où une page unique n'en sert qu'une ;
- une progression a besoin d'unités : « terminé » doit vouloir dire quelque
  chose de plus fin que « ce sujet entier ».

La profondeur reste de deux niveaux (`guides/x/y.html`), donc `DOCMASTER_BASE`
et le calcul de chemin des favoris continuent de fonctionner sans changement.

### Ce que contient un niveau

La trame actuelle est conservée — c'est l'atout du site : explication, exemple
chiffré, erreur fréquente, à retenir. S'y ajoute, par section, un espace réservé
à la pratique (exercice ou simulateur), et le quiz existant.

---

## 4. Ce qu'il faut adapter, et une seule fois

| Mécanisme | Adaptation |
|---|---|
| `favoris.js` | Fonctionne tel quel : la profondeur ne change pas |
| `mesure.js` | Le niveau entre dans le nom de l'événement |
| `quiz.js` + banques | Les banques prennent une dimension de niveau |
| `search-data.js` | Doit référencer les pages de niveau |
| `mon-espace.html` | La progression se compte en niveaux, plus en sujets |
| `scripts/veille.js` | Lit les pages de niveau, non plus le seul `index.html` |
| `scripts/rapport-usage.js` | Idem pour la lecture des titres |
| Hook `pre-commit` | Date toutes les pages sous `guides/`, non le seul `index.html` |
| `sitemap.xml` | Nouvelles pages |
| Fil d'Ariane | Accueil › Sujet › Niveau |

---

## 5. Méthode

Un sujet **pilote** mené jusqu'au bout — niveaux et pratique — avant toute
production en série. Objectif : découvrir ce que le modèle réclame vraiment sur
un cas réel, plutôt que sur neuf en même temps.

Pilote retenu : **Finance**. C'est le guide le plus fourni (2 252 mots, cinq
sections) et le plus consulté selon la mesure d'usage.

Chaque étape est validée par les audits existants avant publication.

**Chantier terminé le 13 août 2026.** Les neuf sujets sont découpés : 27 pages de
cours, 109 sections, 109 exercices, 816 questions. Le pari du pilote a tenu — après
Finance, chaque sujet n'a demandé que trois lignes de déclaration dans `parcours.js`.

**Vérifié le 14 août** en ajoutant un dixième sujet, *Apprendre à apprendre* : le
parcours lui-même n'a coûté qu'une ligne dans `parcours.js`. Ce qui a réellement
coûté, c'est ce qui comptait les sujets **en prose** — 45 pages annonçaient « 9
guides gratuits » dans le texte alternatif de l'image de partage. Leçon à retenir
pour le prochain sujet : un nombre écrit en toutes lettres dans une page est une
donnée dupliquée comme une autre.

**Chantier « élargir » terminé le 14 août 2026.** Cinq sujets ajoutés dans la journée
— apprentissage, droit, santé au travail, sobriété numérique, négociation — portant
le site de 9 à **14 parcours**. Les cinq pistes annoncées dans la boîte à idées sont
toutes publiées ; la suite dépend désormais des propositions reçues.

### Ordre d'écriture d'un sujet

Les simulateurs d'abord, le cours ensuite, et les chiffres du cours **recopiés de
la sortie des simulateurs**. Écrire le cours en premier puis ajuster le simulateur
a produit quatre erreurs sur neuf sujets ; l'ordre inverse les rend impossibles.

### Sujets où le contenu vieillit

Certains domaines datent plus vite que d'autres. Règle appliquée depuis *Droit &
démarches* : **ne citer que ce qui est stable**, et renvoyer à la source officielle
pour le reste.

| À écrire dans le guide | À ne jamais écrire |
|---|---|
| Un délai inscrit dans la loi depuis des années | Un seuil ou un plafond révisé chaque année |
| Un mécanisme, une règle de raisonnement | Un taux, un barème, un montant |
| Le nom de la source où vérifier | Une valeur recopiée d'un article |

Le test : *si cette phrase est fausse dans dix-huit mois, le lecteur le verra-t-il ?*
Si non, elle n'a rien à faire dans le guide.

### Sujets touchant à la santé

Règle appliquée depuis *Santé & bien-être au travail* : **aucun exercice n'évalue un
état de santé.** Les contrôles portent sur des conditions de travail et sur des
démarches, jamais sur des symptômes totalisés en un score.

Un score rendu par une page web peut rassurer à tort quelqu'un qui va mal, ou
inquiéter durablement quelqu'un qui va bien. Des questionnaires validés existent —
ils s'emploient dans un cadre, avec un entretien et une interprétation.

Tout parcours touchant à la santé porte les coordonnées d'aide réelles : médecin
traitant, médecin du travail, et le **3114**.

### Les podcasts

Un épisode par parcours, environ une minute et demie. **L'audio est produit par
NotebookLM** à partir du texte du parcours : le site ne fabrique pas la voix, il
prépare la matière et intègre le résultat.

| Étape | De | Vers |
|---|---|---|
| `node scripts/exporter-parcours.js` | `guides/<sujet>/*.html` | `podcasts/sources/<sujet>.txt` et sa consigne |
| NotebookLM, à la main | ce texte | un `.m4a` déposé dans `podcasts/brut/` |
| `node scripts/preparer-audio.js` | `podcasts/brut/<sujet>.*` | `assets/audio/<sujet>.mp3` et `podcasts/durees.json` |
| `node scripts/publier-podcasts.js` | `podcasts/<sujet>.md` et l'audio | `podcasts.html`, `en/podcasts.html`, `podcast.xml`, le lecteur en tête de chaque guide |

**Le texte source est régénéré, jamais recopié.** Un texte copié à la main serait
figé au jour de la copie, et l'épisode raconterait une version du parcours qui
n'existe plus, sans que rien ne le signale. L'export exclut le bloc du lecteur
audio : sans cela on donne à NotebookLM la présentation de l'épisode qu'il doit
produire, et l'épisode se met à parler de lui-même.

**La consigne est écrite par parcours, le nom dedans.** Elle était un modèle
unique où il fallait remplacer « Finance » à la main : **quatre épisodes sur cinq
sont partis en gardant le nom de l'exemple**, dans leur première phrase. Demander
à quelqu'un de tenir deux choses d'accord est le défaut que ce dépôt corrige
partout ailleurs ; il n'y a plus rien à remplacer.

**Deux barrages, et le fichier fautif est supprimé.** À l'entrée, un son déjà
saturé est refusé — baisser le volume d'un son saturé ne le désature pas. À la
sortie, le MP3 doit tenir ses promesses de niveau, de crête et de durée ; s'il
échoue il est **effacé**, parce qu'un fichier qui sature est pire qu'un fichier
absent : il part en ligne sans que personne le réécoute.

Ce barrage de sortie a été aveugle un temps : sa lecture du nombre ne gérait pas
le signe `+`, donc une crête à `+0.1` devenait illisible, et la règle « une
mesure absente n'est pas une mesure ratée » le faisait taire — exactement dans le
cas qu'il existait pour attraper.

**Le niveau est le même partout** : −16 LUFS, en deux passes. Les deux passes
doivent viser les mêmes cibles et voir la même chaîne de traitement ; elles ne le
faisaient pas, et le défaut ne s'est vu qu'en donnant à la chaîne une source déjà
compressée, sortie à −20,7 LUFS.

La masterisation ajoute un coupe-bas à 80 Hz, une compression douce — c'est elle
qui donne l'impression que la voix est *proche* — et une présence à 3 kHz, la
bande de l'intelligibilité. Pas de débruitage : il durcit les consonnes.

**La durée est relevée à la masterisation et écrite dans `podcasts/durees.json`.**
La publication la lit là, et non par `ffprobe` : ffprobe n'existe pas sur le
runner d'intégration continue, et la page s'y fabriquait autrement qu'en local.
Un fichier généré ne doit dépendre que de ce que le dépôt contient.

**Le résumé écrit n'est pas une transcription.** L'audio venant du parcours et
non d'un script, la page ne promet pas les mots exacts : elle dit « ce que
raconte l'épisode ».

**Le flux ne contient que les épisodes dont l'audio existe.** Une pièce jointe
annoncée mais absente fait afficher une erreur dans l'application de l'auditeur,
loin du site — le pire endroit pour se tromper. **Le flux reste unique et
français**, même si la page existe dans les deux langues : il n'y a qu'une
bande-son, et deux flux ne feraient que dédoubler les abonnements.

#### Le clonage de voix, essayé puis abandonné

La première chaîne clonait la voix de l'auteur. Quatre versions ont été rejetées
à l'écoute, dont trois pour du bruit. Trois correctifs ont visé à côté —
écrêtage, coupures entre phrases, sigles mal prononcés — avant que la mesure ne
tranche, sur la même phrase et le même modèle :

```
NotebookLM, jugé acceptable ......... 5,3 dB de netteté
voix par défaut du modèle ........... 4,1 dB
la même, clonant la référence ....... 1,1 dB
l'enregistrement de référence ....... 0,5 dB
```

Le modèle sait produire une voix nette ; ce qui la dégrade est la **référence**.
Le clonage ne copie pas que le timbre, il copie les conditions d'enregistrement —
la pièce, la distance au micro, la réverbération. Le bruit n'est pas *sur* la
voix, il est *dedans*, et aucun débruitage ne l'en sort : un `afftdn` fort ne fait
passer le rapport que de 1,3 à 1,6 dB, en assombrissant le son.

`scripts/verifier-voix.py` note un enregistrement en trois secondes plutôt que de
découvrir le problème après quatre minutes de calcul. Il reste utile si le
clonage est un jour repris : **ne pas le reprendre sans un enregistrement qu'il
accepte.**

#### Ce qui ne doit jamais entrer dans le dépôt

| Dossier | Contenu | Pourquoi il est ignoré |
|---|---|---|
| `podcasts/voix/` | la voix de l'auteur | le dépôt est public et le site publié sous pseudonyme ; une voix identifie |
| `podcasts/brut/` | les `.m4a` de NotebookLM | sources lourdes, régénérables, sans intérêt public |
| `podcasts/sources/` | l'export des parcours en texte | GitHub Pages les servirait : tout le contenu des guides publié une seconde fois, en clair, à une autre adresse |

Seul le MP3 produit est versionné. Les deux premiers dossiers sont **sauvegardés
sur la clé** depuis le 30 août : ignorés par git, ils n'avaient aucun filet.

L'audio ne porte **pas** de filigrane. La chaîne de clonage en posait un (Perth,
inclus dans Chatterbox) ; elle ne sert plus, et rien ne le remplace côté
NotebookLM. Les pages qui présentent les podcasts disent donc simplement que la
voix est synthétique.

### Ce qui compte les sujets

Un nombre écrit en toutes lettres dans une page est une donnée dupliquée. Trois
ajouts de sujet l'ont prouvé trois fois :

| Endroit | Traitement |
|---|---|
| `og:image:alt` de chaque page | Balayage automatique à chaque ajout — inévitable |
| Énumération des domaines en prose | **Supprimée** : « À propos » et la FAQ renvoient à l'accueil |
| Compteur de *Mon espace* | Dérivé de `parcours.js` — n'a jamais eu à être touché |

La troisième ligne est le modèle : ce qui est dérivé d'une source unique ne ment
jamais. Les deux premières ont menti.

**Suite, 21 août 2026.** La première ligne mentait encore, et personne ne
pouvait le voir : le texte alternatif avait bien été corrigé à 14, mais
`og-image.png` — l'image elle-même, celle que voient les gens à qui l'on
partage un lien — restait *dessinée* avec « 9 guides gratuits » et sept
domaines. Elle n'avait aucune source : personne ne pouvait la corriger sans la
redessiner. Elle est désormais générée depuis `assets/img/og-image.svg`, lui-même
écrit par `appliquer-identite.js`. **On ne relit pas une image ; il faut donc
qu'elle soit dérivée.**

### L'identité du site

`assets/js/identite.js` déclare le nom, la signature, l'adresse de base et
l'initiale du logo. Rien d'autre ne les écrit.

Les 129 pages en portent malgré tout des copies, dans leur `<head>` et dans leur
prose. **Ce n'est pas une entorse, c'est une obligation :** les robots des
réseaux sociaux et des moteurs de recherche ne lisent pas ce que JavaScript
ajoute après coup. Une balise `og:` posée à l'affichage n'existe pas pour eux, et
tout partage montrerait un aperçu vide.

La règle n'est donc pas « la donnée n'apparaît qu'une fois », mais **« la donnée
n'est SAISIE qu'une fois »**. `scripts/appliquer-identite.js` écrit les copies ;
`scripts/verifier-identite.mjs` et le mode `--verifier` refusent celles que la
source ne produirait pas. Même modèle que `dater-guides.js`, pour la même raison.

| Ce qui dérive | Nombre |
|---|---|
| `<title>`, `og:title`, `twitter:title` | 129 × 3 |
| `og:site_name`, `og:image:alt`, `og:locale` | 129 × 3 |
| `canonical`, `og:url`, `og:image`, `twitter:image` | 129 × 4 |
| `hreflang` fr / en / x-default | 64 × 3 |
| Bannière de l'accueil, logo, pied de page | 2 + 2 |
| `sitemap.xml`, `robots.txt`, favicon, image de partage | 4 fichiers |

Renommer le site coûte une ligne dans `identite.js`, plus le nom sortant ajouté
à `anciensNoms` — sans quoi le script ne saurait plus reconnaître ce qu'il a
lui-même écrit la fois d'avant.

**Ce qui ne suit pas le renommage, volontairement :** les clés de stockage local
(`docmaster-favoris`, `docmaster-read-*`, `docmaster-mascotte`,
`docmaster-search-history`) et la variable `DocMasterFavoris`. Les renommer
effacerait les favoris et la progression de chaque visiteur pour un bénéfice
nul — personne ne les voit. Le remplacement s'arrête donc devant une lettre
suivante, et la casse compte.

---

### Largeur de lecture

**Le texte courant reste sous 75 signes par ligne.** Il s'étirait sur 1060 px,
soit environ 130 signes : l'œil perd sa ligne au retour bien avant. Les pages de
cours resserrent donc leur colonne — `main:has(.lecon)` — et le texte est
plafonné en `ch`, ce qui suit la police et non une largeur en pixels.

Tableaux et simulateurs sont exclus du plafond : ils se lisent en colonnes, pas
en lignes de texte. `:has()` est sans danger ici, un navigateur qui l'ignore
retombe sur la mise en page large sans rien casser.

### Ajouter un sujet ne s'arrête pas au dossier `guides/`

Le site est un maillage. Une notion expliquée dans un guide est cherchée depuis
le glossaire, depuis la recherche, depuis les renvois entre guides. **Une page
livrée sans ses rattachements est à moitié livrée**, et le manque est invisible
depuis la page elle-même — ce qui le fait durer.

Les surfaces à mettre à jour, à chaque sujet ajouté :

| Surface | Contrôlée par |
|---|---|
| `parcours.js` | contrôle 2 |
| Anneau de navigation | contrôle 3 |
| `search-data.js` | contrôle 4 |
| **Glossaire, français et anglais** | **contrôle 4 bis** |
| Chiffres annoncés en prose | contrôle 5 |
| Cartes de l'accueil, « déjà couvert » | contrôle 5 |
| `CONTENU_TRADUIT`, `PAGES_TRADUITES` | contrôle 9 |

Le contrôle 4 bis a été ajouté après coup, et pour cause : c'était la seule
surface sans contrôle, et **elle a dérivé cinq sujets durant**. Droit, santé,
écologie, négociation et apprendre n'avaient aucune entrée au glossaire, resté
aux neuf sujets d'origine. Toutes les autres étaient restées justes.

La leçon est celle du reste du document : *ce qui n'est pas contrôlé dérive, et
la dérive ne se voit pas depuis l'endroit où elle se produit.*

## 6. Les langues

Sept langues déclarées : français, anglais, espagnol, allemand, italien,
chinois, russe. `assets/js/langues.js` est la **source unique** — les libellés,
les drapeaux, les bandeaux et les listes de ce qui est traduit vivent là, et
nulle part ailleurs. `audit-coherence.mjs` bloque si un texte manque dans une
langue.

**Le sélecteur n'en propose que deux.** Une langue n'y figure que si elle a du
contenu — un sujet dans `CONTENU_TRADUIT`, ou une page dans `PAGES_TRADUITES`.
Les cinq autres ont leurs libellés prêts et attendent. La liste se **déduit**
de ces deux-là plutôt que d'être écrite à la main : une troisième liste aurait
fini par les contredire, et le jour où l'espagnol recevra son premier sujet,
son drapeau apparaîtra sans qu'on y pense.

Le repli d'un choix mémorisé se fait aussi sur les langues *disponibles*, pas
sur les sept déclarées. Ce n'est pas théorique : un visiteur ayant choisi le
russe avant la restriction faisait chercher un drapeau absent de la liste, et
l'exception tombait **avant** l'écriture de la navigation — la page s'affichait
sans barre de menu.

**Ajouter une langue** : une entrée dans `LANGUES`, une colonne dans `TEXTES`.
Elle restera invisible au sélecteur tant qu'elle n'aura pas de contenu.
**Ajouter un texte** : une entrée dans `TEXTES`, avec les sept langues.

### Deux mécanismes, et pourquoi ils diffèrent

| Quoi | Comment | Pourquoi |
|---|---|---|
| L'interface | traduite par le navigateur | éviter des centaines de fichiers dont le contenu serait identique |
| Le contenu | de vrais fichiers dans `en/`, `es/`… | une page de cours doit être lisible sans JavaScript et indexable |

`langues.js` se charge **avant** `layout.js` dans les 129 pages : c'est
`layout.js` qui écrit la navigation, il lui faut les libellés avant de l'écrire.
L'audit le vérifie page par page.

### Deux listes, deux emplacements

`CONTENU_TRADUIT` recense les **sujets** traduits, qui vivent sous
`<langue>/guides/<sujet>/`. `PAGES_TRADUITES` recense les **pages hors cours**,
qui vivent sous `<langue>/<page>.html`. Les deux ne pointent pas au même
endroit ; les confondre produirait des adresses fausses, donc des 404.

Un préfixe de langue se reconnaît par `/(langue)/` **suivi de `guides/` ou d'un
nom de fichier**. Sans cette condition, `/guides/it/` serait lu comme de
l'italien le jour où un sujet s'appellerait `it`. La même règle est recopiée
dans `audit-geometrie.html` — elle y avait été oubliée une fois, et le contrôle
réclamait `lang="fr"` sur six pages anglaises.

Les liens du menu et du pied passent par un `lien()` qui pose le préfixe quand
la page existe dans la langue courante. Sans lui, le menu était traduit mais
menait au français.

### Ce qui n'est pas négociable

**Un drapeau qui promet une traduction inexistante est pire que pas de drapeau.**
Tant qu'une page n'est pas traduite, un bandeau le dit au visiteur **dans sa
langue**. Le mécanisme existe avant le contenu, précisément pour que la promesse
ne précède jamais la livraison.

**Le bandeau ne parle que de la page affichée.** Il a d'abord annoncé « les cours
de ce site sont écrits en français » — affirmation devenue fausse le jour où le
quatorzième sujet a été traduit, et qui décourageait alors d'aller lire des
cours qui existaient. *Une affirmation sur l'ensemble du site vieillit mal ; une
affirmation sur la page qu'on a sous les yeux reste vraie.* Trois états, donc :
rien si la page est déjà dans la bonne langue, un **lien** vers la version
traduite si elle existe, l'aveu qu'elle n'existe pas sinon.

**Le contenu qui décrit le droit français porte un avertissement.** Traduire
« repos quotidien de 11 heures » n'en fait pas une règle allemande. Quatre sujets
sont concernés — `droit`, `finance`, `entrepreneuriat`, `sante` — et sont
déclarés dans `SUJETS_DROIT_FRANCAIS`. Un lecteur étranger prendrait sinon ces
règles pour les siennes, sur des sujets où l'erreur coûte cher.

**Le bandeau ne suffit pas : la phrase elle-même doit le dire.** « The general
French limitation period is 5 years », « a PEA — the French equity savings plan ».
Le bandeau prévient ; la phrase empêche de sortir un chiffre de son contexte
quand elle est lue seule. Deux exceptions signalées comme telles : le **RGPD**,
qui vaut dans toute l'Union, et les **noms propres** — INPI, Légifrance —
conservés pour rester trouvables.

**Le drapeau est toujours accompagné du nom de la langue.** Un drapeau désigne un
pays, pas une langue : l'espagnol n'est pas parlé qu'en Espagne. Le nom lève
l'ambiguïté et sert de repère à qui ne reconnaît pas le drapeau.

**Les drapeaux sont des SVG en ligne, jamais des emojis.** `🇫🇷` est un emoji
drapeau, et **Windows n'a aucune police qui les dessine** — Segoe UI Emoji n'en
contient pas un seul. Le système retombe alors sur les deux lettres du
caractère, et l'ordinateur affichait « FR » là où le téléphone montrait un
drapeau. Un défaut invisible depuis un mobile, permanent sur un poste fixe, et
qu'aucune règle CSS ne rattrape : il n'y a pas de glyphe à styler.

Mesuré plutôt que supposé : la largeur de `🇫🇷` valait exactement la somme des
largeurs de ses deux lettres prises séparément — 28 px = 13 + 15. Un vrai
drapeau serait un seul glyphe, plus large que chacune.

Les sept sont donc dessinés dans `langues.js`, dans un cadre commun 3:2 pour que
la liste reste alignée. Pas de fichier à charger, pas de dépendance, net à
toute taille, identique sur tous les systèmes.

**Google Traduction est exclu.** Il chargerait des cookies Google, ce que le site
s'interdit — voir la règle sur reCAPTCHA.

### L'état des traductions

L'interface est traduite dans les sept langues : 37 textes × 7. **L'anglais est
complet** — les 14 sujets et les 8 pages hors cours, soit 64 pages sous `en/`.
Les cinq autres langues n'ont que l'interface.

Trois choses restent en français dans la version anglaise, et le disent :

- **les titres d'articles** de la page Actualités — un titre traduit ne se
  retrouve plus dans un moteur de recherche ;
- **l'index de recherche**, dont les 237 entrées sont titrées en français ; les
  liens, eux, mènent aux pages anglaises ;
- **les mentions légales**, traduction de courtoisie : le site est publié en
  France, un encadré indique que la version française fait foi.

`CONTENU_TRADUIT` et `PAGES_TRADUITES` recensent ce qui est fait, et l'audit
vérifie que les pages annoncées existent vraiment.

### La page 404 est un cas à part

GitHub Pages la sert pour **toute** adresse inconnue, `/en/` comprise : elle ne
peut donc pas exister en un exemplaire par langue. Elle traduit son propre
texte, et son lien de retour mène à l'accueil de la bonne langue. Le français
reste écrit dans le HTML pour qu'elle demeure lisible sans JavaScript. Elle pose
`window.DOCMASTER_PAGE_AUTOTRADUITE`, qui évite que le bandeau l'annonce comme
non traduite.

### Ce qui s'écrit dans les deux langues

`scripts/publier-actualites.js` rend **quatre** pages : `actualites.html` et
`index.html`, dans chaque langue. Il n'en rendait que deux ; la page anglaise
aurait figé sa liste au jour de sa traduction, **sans que rien ne le signale**.
Son option `--hors-ligne` rejoue le rendu depuis l'état enregistré, sans jeton
GitHub — la seule façon de voir l'effet d'un gabarit modifié.

## 7. La palette

**Toute couleur vit dans `:root` et `html.dark-mode`, en tête de `style.css`, et
nulle part ailleurs.** `audit-coherence.mjs` le vérifie et bloque : une couleur
écrite en dur ailleurs est traitée comme une anomalie, et tout jeton défini en
clair doit l'être en sombre.

La règle vient d'un défaut précis. `--primary` valait le même bleu dans les deux
thèmes ; sur une carte sombre il ne donne que 2,83:1, sous le 4,5:1 qu'exige un
texte. Trois endroits avaient reçu un `#7aa5ff` écrit à la main — et **une
quinzaine d'autres sont restés illisibles**, faute d'avoir été remarqués. Rustiner
un symptôme laisse tous ses jumeaux en place.

Deux familles de bleu, et c'est la clef :

| Jeton | Rôle | Clair | Sombre |
|---|---|---|---|
| `--primary` | ce qui s'**écrit** : liens, titres de cartes, chiffres | `#2563eb` | `#8ab4ff` |
| `--primary-fond` | les **aplats**, qui portent du texte blanc | `#2563eb` | `#2563eb` |
| `--hero-de` / `--hero-a` | le dégradé de bannière | bleu → violet | bleus assombris |
| `--teinte` | fond posé **sur** une carte : exemples, pièges, quiz | `#eef2f7` | `#0f172a` |
| `--succes` `--alerte` `--attention` `--favori` | les statuts | foncés | éclaircis |

Ce qui s'écrit s'éclaircit en mode sombre, donc tout texte devient lisible d'un
coup — **y compris ce qui sera ajouté plus tard**. Les aplats gardent le bleu
franc dont le texte blanc a besoin.

Trois pièges à ne pas rouvrir :

- **`--background` ne convient pas comme fond d'encadré.** Sur une carte blanche,
  `#f8fafc` donne 1,05 : une bordure sans boîte. C'est à cela que sert `--teinte`.
- **Un fond teinté coûte du contraste au texte gris.** `--muted` a dû être
  assombri quand `--teinte` est apparue, sinon les légendes tombaient à 4,23:1.
- **Une couleur ne doit jamais porter seule une information.** Les quiz ne
  signalaient juste et faux que par du vert et du rouge ; un ✓ et un ✗ doublent
  désormais le signal.

La vérification se fait sur le DOM réel, dans un navigateur, les deux thèmes et
quiz répondus : le calcul statique ne voit ni les fonds hérités, ni les voiles
semi-transparents, ni les états produits par le JavaScript.

## 8. Contrôles automatiques

Les quatre hooks vivent dans `.git/hooks/`, qui **n'est pas versionné** : recréés à
la main en cas de nouveau clone. Les scripts qu'ils appellent, eux, sont dans le
dépôt — les hooks ne portent que les chemins locaux.

| Hook | Script | Effet |
|---|---|---|
| `pre-commit` | `scripts/valider-js.js` | **Bloque** le commit si `search-data.js`, `parcours.js`, `pratique.js` ou une banque de questions ne se charge plus, contient une clé répétée, ou renvoie vers un fichier absent |
| `pre-commit` | `scripts/dater-guides.js` | Date les pages de `guides/` réellement commitées |
| `pre-commit` | `scripts/publier-accueil.js` | Régénère l'accueil **après** la datation, et l'indexe |
| `post-commit` | `scripts/sauvegarder-depot.sh` | Met à jour la sauvegarde `.bundle` |
| `post-rewrite` | idem | Refait la sauvegarde après un rebase ou un `commit --amend` |
| `post-merge` | idem | Refait la sauvegarde après une fusion |

**L'ordre du `pre-commit` fait partie du contrat.** L'accueil annonce les guides
mis à jour en lisant les dates que `dater-guides.js` vient d'écrire. Sans la
troisième ligne, un commit contenait des guides datés d'aujourd'hui et un accueil
bâti sur hier — et l'intégration continue le refusait, à juste titre. En local
tout passait, parce que l'accueil avait été régénéré *avant* la datation.

**Neuf contrôles bloquants tournent par ailleurs à chaque poussée**, dans
`controles.yml` et `identite.yml` : `valider-js`, `audit-coherence`,
`verifier-identite`, `verifier-registre`, `appliquer-identite --verifier`,
`publier-accueil --verifier`, `publier-podcasts --verifier`, `test-recherche` et
`test-actualites`. Les trois `--verifier` ne touchent à rien : ils refont la
génération en mémoire et refusent si le résultat diffère du dépôt.

### La géométrie, elle, se mesure

`scripts/audit-geometrie.html` — **à lancer après toute modification de la mise en
page.** Deux façons : `node scripts/lancer-audit-geometrie.mjs`, qui pilote un
Chrome sans interface s'il en trouve un sur la machine, ou à la main dans un
navigateur. Il ne se déclenche pas au commit, et c'est une limite assumée :

```bash
node scripts/serveur.js
```

puis ouvrir `http://localhost:8099/scripts/audit-geometrie.html`.

**Une largeur ne se déduit pas du CSS.** Il faut un moteur de rendu pour savoir
qu'une carte fait 626 px et non 1060, ou qu'un titre occupe une case de grille.
Node n'en a pas, et l'y ajouter voudrait dire installer un navigateur sans
interface et les dépendances qui vont avec — dans un projet qui n'en a aucune.
Le navigateur est donc le moteur, et le prix est que le contrôle se lance à la
main.

Il mesure **27 gabarits à 5 largeurs, soit 732 mesures**, et vérifie :

| Contrôle | Défaut qui l'a fait naître |
|---|---|
| Pas de débordement horizontal | — |
| Aucun élément hors de la fenêtre | — |
| Les grilles occupent leur largeur | limite de lecture écrasant `.actu-liste` et `.parcours` à 59 % |
| Le nombre de colonnes annoncé | repli mobile écrasé par la cascade, 2 colonnes de 155 px |
| Un titre ne prend pas une case de grille | le titre de la liste des parcours mangeait la place d'un guide |
| Texte sous 85 signes par ligne | 130 signes avant la passe visuelle |

**Les quatre familles de contrôle ont été éprouvées en réinjectant les vraies
régressions**, une par une, et en vérifiant que chacune ressort avec sa mesure.
Un garde-fou qu'on n'essaie pas ne garde rien — c'est déjà arrivé sur le seuil
du contrôle de zoom.

### Sauvegardes

Le `.bundle` se régénère à chaque commit dans `Desktop\Sauvegardes-DocMaster\`, par
`scripts/sauvegarder-depot.sh` — versionné pour être relu, appelé par trois hooks.
La copie sur clé se fait avec `scripts/copier-sur-cle.ps1`, qui vérifie la
sauvegarde avant de la copier, puis compare les empreintes après. Elle emporte
aussi `podcasts/brut/` et `podcasts/voix/`, que git ignore et qui n'avaient donc
aucune sauvegarde.

**Trois hooks et non un seul, et pas de sauvegarde en HEAD détaché.** Le bundle
a porté pendant des jours le bon commit sous `HEAD` mais une branche `main` en
retard de deux commits : restauré, il aurait rendu un dépôt faux. La cause est
l'enchaînement `git commit` puis `git pull --rebase` — le rebase rejoue le commit,
ce qui déclenchait la sauvegarde **au milieu** du rebase, puis déplaçait `main`
sans rien déclencher. Les vérifications d'alors ne regardaient que `HEAD`, qui
était juste.

Deux pièges de ce script, corrigés le 15 août et à ne pas réintroduire :
`git bundle verify` **exige d'être dans un dépôt** (il s'exécute donc dans un dépôt
vide temporaire), et il écrit son compte rendu sur la **sortie d'erreur** même en cas
de succès — sous PowerShell 5.1, seul le code de retour est fiable.

Une copie ne vaut que testée : `git clone <bundle>` puis comparaison de
`rev-parse HEAD^{tree}` avec le projet. Fait le 5 septembre 2026 depuis la clé —
même arbre au bit près, les neuf contrôles verts dans la copie restaurée, et son
serveur servant toutes les pages, audio compris.

### Workflows

| Workflow | Quand | Effet |
|---|---|---|
| `controles.yml` | à chaque poussée | Les contrôles bloquants ; un échec arrête la mise en ligne |
| `identite.yml` | à chaque poussée | Vérifie que rien ne s'écarte de `identite.js` |
| `veille.yml` | 07h23 et 17h23 UTC | Une recherche par sous-section, une Issue dont les cases arrivent **déjà cochées** |
| `actualites.yml` | après la veille, ou à chaque case décochée | Publie les articles retenus, commite les pages |
| `rapport-usage.yml` | lundi 06h37 UTC | Classements d'usage, en Issue |
| `alerte-deploiement.yml` | si un déploiement échoue | Ouvre une Issue ; sur ses cent derniers passages, il n'a jamais eu à se déclencher |

**Les cases arrivent cochées, et décocher retire l'article.** C'est l'inverse du
fonctionnement d'origine, où rien ne paraissait sans relecture humaine. La
relecture a disparu ; ce qu'elle attrapait est passé aux filtres d'admission de
`scripts/actualites-regles.js` — tournures promotionnelles, pertinence par
rapport à la section, communiqués produit.

La veille couvre 169 sous-sections et prend une quinzaine de minutes. La pause de
250 ms entre deux requêtes est délibérée : elle évite de marteler Google News, et
rien ne dépend de la rapidité.

**Le rapport se découpe en plusieurs Issues** depuis qu'il a dépassé les 65 536
caractères qu'accepte GitHub. Conséquence à retenir pour toute évolution : **plus
rien ne doit compter en Issues.** Trois compteurs le faisaient — déduplication,
fermeture automatique, publication — et sont devenus faux le jour du découpage. Ils
lisent tous 100 Issues, le maximum de l'API.

**`AGE_MAX_JOURS` vaut 120 dans `veille.js` comme dans `publier-actualites.js`, et
les deux valeurs doivent rester identiques.** Si la veille proposait plus vieux que
ce que le site accepte, l'auteur cocherait des articles qui ne paraîtraient jamais —
c'est arrivé, et sept cases cochées ont donné deux articles publiés.

Deux règles en découlent, apprises au même moment :

- **Un site qui annonce « les compétences de demain » ne peut pas afficher un article
  de 2021.** La règle d'âge n'est pas négociable ; ne pas la contourner sous prétexte
  qu'une case a été cochée.
- **Ce qu'un script écarte, il doit le dire.** Le défaut n'était pas la règle mais son
  application silencieuse. Toute mise à l'écart se nomme, avec son motif.

Le premier bloque, le second non. La différence est délibérée : une date figée est
gênante, un index de recherche invalide supprime la recherche de **toutes** les pages
sans que rien ne le signale.

**Confronter chaque exemple chiffré d'un cours au simulateur de sa section** est
l'étape qui a le meilleur rendement : elle a révélé quatre erreurs sur neuf sujets,
dont une où c'était le cours qui avait tort et le simulateur raison.
