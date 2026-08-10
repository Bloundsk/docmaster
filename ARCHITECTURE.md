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
