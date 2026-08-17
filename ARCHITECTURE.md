# Architecture de contenu — DocMaster

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

actualites/index.html              liste des actualités
actualites/<aaaa-mm-jj>-<titre>.html
```

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

---

### Largeur de lecture

**Le texte courant reste sous 75 signes par ligne.** Il s'étirait sur 1060 px,
soit environ 130 signes : l'œil perd sa ligne au retour bien avant. Les pages de
cours resserrent donc leur colonne — `main:has(.lecon)` — et le texte est
plafonné en `ch`, ce qui suit la police et non une largeur en pixels.

Tableaux et simulateurs sont exclus du plafond : ils se lisent en colonnes, pas
en lignes de texte. `:has()` est sans danger ici, un navigateur qui l'ignore
retombe sur la mise en page large sans rien casser.

## 6. Les langues

Sept langues : français, anglais, espagnol, allemand, italien, chinois, russe.
`assets/js/langues.js` est la **source unique** — les libellés, les drapeaux, les
bandeaux et la liste des sujets traduits vivent là, et nulle part ailleurs.
`audit-coherence.mjs` bloque si un texte manque dans une langue.

**Ajouter une langue** : une entrée dans `LANGUES`, une colonne dans `TEXTES`.
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

Les deux hooks vivent dans `.git/hooks/`, qui **n'est pas versionné** : recréés à la
main en cas de nouveau clone. Les scripts qu'ils appellent, eux, sont dans le dépôt.

| Hook | Script | Effet |
|---|---|---|
| `pre-commit` | `scripts/valider-js.js` | **Bloque** le commit si `search-data.js`, `parcours.js`, `pratique.js` ou une banque de questions ne se charge plus, contient une clé répétée, ou renvoie vers un fichier absent |
| `pre-commit` | `scripts/dater-guides.js` | Date les pages de `guides/` réellement commitées |
| `post-commit` | — | Met à jour la sauvegarde `.bundle` |

### La géométrie, elle, se mesure

`scripts/audit-geometrie.html` — **à lancer à la main après toute modification de
la mise en page.** Il ne se déclenche pas au commit, et c'est une limite assumée :

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

Il mesure 6 gabarits à 4 largeurs, soit 92 mesures, et vérifie :

| Contrôle | Défaut qui l'a fait naître |
|---|---|
| Pas de débordement horizontal | — |
| Aucun élément hors de la fenêtre | — |
| Les grilles occupent leur largeur | limite de lecture écrasant `.actu-liste` et `.parcours` à 59 % |
| Le nombre de colonnes annoncé | repli mobile écrasé par la cascade, 2 colonnes de 155 px |
| Un titre ne prend pas une case de grille | « Nos catégories » mangeait la place d'un guide |
| Texte sous 85 signes par ligne | 130 signes avant la passe visuelle |

**Les quatre familles de contrôle ont été éprouvées en réinjectant les vraies
régressions**, une par une, et en vérifiant que chacune ressort avec sa mesure.
Un garde-fou qu'on n'essaie pas ne garde rien — c'est déjà arrivé sur le seuil
du contrôle de zoom.

### Sauvegardes

Le `.bundle` se régénère à chaque commit dans `Desktop\Sauvegardes-DocMaster\`. La
copie sur clé se fait avec `scripts/copier-sur-cle.ps1`, qui vérifie la sauvegarde
avant de la copier, puis compare les empreintes après.

Deux pièges de ce script, corrigés le 15 août et à ne pas réintroduire :
`git bundle verify` **exige d'être dans un dépôt** (il s'exécute donc dans un dépôt
vide temporaire), et il écrit son compte rendu sur la **sortie d'erreur** même en cas
de succès — sous PowerShell 5.1, seul le code de retour est fiable.

Une copie ne vaut que testée : `git clone <bundle>` puis comparaison de
`rev-parse HEAD^{tree}` avec le projet.

### Workflows

| Workflow | Quand | Effet |
|---|---|---|
| `veille.yml` | 07h23 et 17h23 UTC | Une recherche par sous-section, une Issue de propositions à cocher |
| `actualites.yml` | à chaque case cochée | Publie les articles retenus, commite les pages |
| `rapport-usage.yml` | lundi 06h37 UTC | Classements d'usage, en Issue |

La veille couvre 157 sous-sections et prend une quinzaine de minutes. La pause de
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
