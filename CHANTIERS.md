# Chantiers — Clicked

Ce qui reste à faire, et comment le relancer. Ce qui est **fait** vit dans
`CHANGELOG.md` ; la **méthode**, dans `ARCHITECTURE.md`. Ce fichier se met à jour
chaque fois qu'un chantier s'ouvre ou se ferme.

**État au 11 septembre 2026.** Aucun chantier technique n'est en cours :
l'audit pédagogique (vagues 1 à 3) est livré, les polices sont hébergées sur le
site, tous les contrôles passent. **Le site n'est pas encore lancé** : ses
visiteurs sont des testeurs.

---

## En un coup d'œil

| Chantier | Qui | Quand | Pour le relancer, dire |
|---|---|---|---|
| [Lire les suggestions de la boîte à idées](#lire-les-suggestions-de-la-boîte-à-idées) | Ludo | à son rythme | — |
| [Vérifier que la boîte à idées livre les messages](#vérifier-que-la-boîte-à-idées-livre-les-messages) | Ludo, ou Claude avec son accord | avant le lancement | « envoie un message de test par la boîte à idées » |
| [Décider du lancement](#décider-du-lancement) | Ludo | — | — |
| [Juger l'effet des titres et des amorces](#juger-leffet-des-titres-et-des-amorces) | Ludo, Claude pour l'analyse | octobre 2026 au plus tôt, site lancé | « regarde l'effet des titres et des amorces » |
| [Écrire la leçon « compte piraté »](#écrire-la-leçon--compte-piraté-) | Claude | quand Ludo le décide | « écris la leçon sur le compte piraté » |
| [La septième carte, seule sur sa rangée](#la-septième-carte-seule-sur-sa-rangée) | Ludo décide | — | « ajoute une huitième situation » ou « retire la situation … » |
| [Le double passage des amorces](#le-double-passage-des-amorces) | Claude | avant la prochaine leçon | « corrige le double passage des amorces » |
| [Renommer le dépôt](#renommer-le-dépôt) | Ludo décide | déconseillé | « prépare le renommage du dépôt » |

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
5. `node scripts/amorcer-lecons.js` (deux fois, voir plus bas), puis
   `chiffrer-parcours.js`, `publier-accueil.js` et `poser-renvois-glossaire.js` ;
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

## 5. Défauts connus, non corrigés

### Le double passage des amorces

`scripts/amorcer-lecons.js` a besoin de **deux passages** pour une leçon écrite
sans amorce : le premier laisse une ligne vide que le second retire. Le résultat
final est juste, et son `--verifier` signale l'écart entre les deux : rien de faux
ne part en ligne, mais le contrôle rougit après un seul passage.

**Pour relancer :** « corrige le double passage des amorces ».

---

## 6. Option déconseillée

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
