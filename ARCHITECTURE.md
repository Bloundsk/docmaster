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

## 6. Contrôles automatiques

Les deux hooks vivent dans `.git/hooks/`, qui **n'est pas versionné** : recréés à la
main en cas de nouveau clone. Les scripts qu'ils appellent, eux, sont dans le dépôt.

| Hook | Script | Effet |
|---|---|---|
| `pre-commit` | `scripts/valider-js.js` | **Bloque** le commit si `search-data.js`, `parcours.js`, `pratique.js` ou une banque de questions ne se charge plus, contient une clé répétée, ou renvoie vers un fichier absent |
| `pre-commit` | `scripts/dater-guides.js` | Date les pages de `guides/` réellement commitées |
| `post-commit` | — | Met à jour la sauvegarde `.bundle` |

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

Le premier bloque, le second non. La différence est délibérée : une date figée est
gênante, un index de recherche invalide supprime la recherche de **toutes** les pages
sans que rien ne le signale.

**Confronter chaque exemple chiffré d'un cours au simulateur de sa section** est
l'étape qui a le meilleur rendement : elle a révélé quatre erreurs sur neuf sujets,
dont une où c'était le cours qui avait tort et le simulateur raison.
