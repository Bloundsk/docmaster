# CLICKED
## Cahier des charges du projet

Version : 1.0 — **7 août 2026**

> **Ce document est le brief d'origine, conservé tel quel.** Il dit ce qui a été
> demandé au départ, au futur : « devra contenir », « seront ». Il n'est pas mis
> à jour, et il ne décrit pas le site d'aujourd'hui.
>
> Il n'a été retouché que deux fois, pour les renommages du nom du site.
>
> | Pour savoir… | Lire |
> |---|---|
> | comment le site fonctionne aujourd'hui | `ARCHITECTURE.md` |
> | ce qui a été fait, pourquoi, et les défauts trouvés | `CHANGELOG.md` |
> | la structure des parcours, source unique | `assets/js/parcours.js` |
>
> Les écarts entre ce brief et le site sont recensés à la fin, en section 13.
> **Ce sont des décisions, pas des oublis** : ne pas « corriger » le site pour
> le faire ressembler à ce document.

---

# 1. Présentation du projet

Clicked est une plateforme de documentation en ligne.

Son objectif est de créer une bibliothèque de guides pédagogiques sur différents sujets.

Les premiers thèmes seront :

- Investissement financier
- Création d'agents IA

La plateforme devra ensuite pouvoir accueillir de nombreux autres domaines.

Exemples :

- Intelligence artificielle
- Programmation
- Automatisation
- Productivité
- Nouvelles technologies

---

# 2. Objectif

Créer des guides :

- faciles à comprendre ;
- professionnels ;
- bien structurés ;
- agréables à lire ;
- utiles pour apprendre une compétence.

Chaque guide doit permettre au lecteur de passer de débutant à autonome.

---

# 3. Utilisateurs ciblés

La documentation doit convenir à :

## Débutants

Personnes qui découvrent un sujet.

## Intermédiaires

Personnes qui veulent progresser.

## Avancés

Personnes qui cherchent à approfondir.

---

# 4. Format final

La documentation sera un site web.

Technologies utilisées :

- HTML
- CSS
- JavaScript

Le site devra fonctionner directement dans un navigateur.

---

# 5. Organisation du projet

Le projet sera organisé ainsi :

Clicked/

- index.html
- assets/
- guides/
- images/
- data/

---

# 6. Style du site

Le design doit être :

- moderne ;
- coloré ;
- simple ;
- professionnel ;
- responsive.

Le site doit fonctionner sur :

- ordinateur ;
- tablette ;
- téléphone.

---

# 7. Fonctionnalités souhaitées

Le site devra avoir :

- une page d'accueil ;
- une navigation ;
- une recherche ;
- des catégories ;
- des guides ;
- un sommaire ;
- un mode sombre ;
- des quiz ;
- des exercices.

---

# 8. Structure d'un guide

Chaque guide devra contenir :

1. Introduction

2. Objectifs

3. Prérequis

4. Concepts fondamentaux

5. Explications détaillées

6. Exemples pratiques

7. Exercices

8. Quiz

9. FAQ

10. Glossaire

11. Conclusion

---

# 9. Règles importantes

La qualité est prioritaire sur la quantité.

Les informations doivent être :

- claires ;
- vérifiées ;
- expliquées simplement.

Il faut éviter :

- les informations inventées ;
- les promesses irréalistes ;
- le jargon non expliqué.

---

# 10. Utilisation des IA

ChatGPT :

Rôle :
Architecte du projet.

Mission :
- organiser ;
- planifier ;
- vérifier la qualité.

---

Claude :

Rôle :
Rédacteur.

Mission :
- écrire les guides ;
- expliquer les concepts ;
- créer les exercices.

---

Agent développeur :

Rôle :
Construire le site.

Mission :
- créer les fichiers ;
- programmer ;
- corriger les problèmes.

---

# 11. Première version du projet

La première version devra contenir :

- une page d'accueil ;
- un guide investissement financier ;
- un guide création d'agents IA.

---

# 12. Vision finale

Créer une bibliothèque de connaissances évolutive permettant d'apprendre des compétences modernes grâce à une documentation claire et interactive.

---

# 13. Ce qui a divergé, et pourquoi

Relevé le 5 septembre 2026. Le brief a bien été tenu sur l'essentiel — le site
existe, il est gratuit, il fonctionne sur les trois formats, il a sa recherche,
son mode sombre et ses quiz. Quatre points ont été décidés autrement en cours de
route.

**Le glossaire et la FAQ ne sont pas dans chaque guide** (section 8). Ils sont à
l'échelle du site : une page de chacun, pour tous les parcours. Répétés dans
cinquante-six pages, ils auraient été cinquante-six endroits à tenir d'accord —
et ils auraient divergé.

**La structure d'un guide est plus resserrée** que les onze parties annoncées.
Chaque notion suit : explication, exemple chiffré vérifiable, erreur fréquente,
phrase à retenir, quiz. Introduction, objectifs et conclusion ont disparu parce
qu'elles disaient ce que le texte montre déjà.

**Les images vivent dans `assets/img/`** et non dans un `images/` à la racine
(section 5). Le dossier `assets/` réunit tout ce qui n'est pas du contenu — CSS,
JavaScript, images, audio. S'y ajoutent depuis : `en/` pour la version anglaise,
`podcasts/` et `scripts/`.

**La répartition des rôles entre IA** (section 10) ne correspond plus à la façon
dont le projet avance. Elle est restée telle quelle : c'est ce qui était prévu au
départ, et le noter ici suffit.

Ce qui a été dépassé, en revanche : le brief prévoyait **deux guides** pour la
première version. Il y en a **quatorze**, chacun en trois niveaux, dans deux
langues, chacun avec son épisode audio.
