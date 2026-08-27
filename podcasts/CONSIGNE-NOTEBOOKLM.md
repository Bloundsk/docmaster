# Fabriquer un épisode dans NotebookLM

Marche à suivre, identique pour les quatorze parcours. Compter deux à trois
minutes par épisode, dont l'essentiel est de l'attente.

## 1. Le document source

Un fichier par parcours, déjà prêt, dans `podcasts/sources/` :

```
podcasts/sources/finance.txt        podcasts/sources/droit.txt
podcasts/sources/ia.txt             podcasts/sources/sante.txt
…                                   podcasts/sources/design.txt
```

Ces fichiers sont **régénérés depuis les guides**, ils ne sont pas recopiés à
la main. Quand un parcours change, relancer :

```
node scripts/exporter-parcours.js
```

Sans quoi l'épisode raconterait une version du parcours qui n'existe plus, et
rien ne le signalerait.

## 2. Dans NotebookLM

1. Créer un notebook, un par parcours.
2. Ajouter le `.txt` du parcours comme **seule** source. Une seule : deux
   sources et l'épisode mélange deux parcours.
3. Choisir **Résumé audio**, puis **Personnaliser**.
4. Régler les quatre champs comme suit — le premier est le plus important :

   | Champ | Choix | Pourquoi |
   |---|---|---|
   | Format | **Briefing** | le seul format à une voix |
   | Langue | **français** | |
   | Longueur | **Court** | ~90 s, la durée câblée dans les guides |
   | Sources | **1 source** | deux sources mélangent deux parcours |

   **Ne pas laisser « Analyse approfondie »**, qui est proposé par défaut : sa
   définition dit « une conversation animée entre deux hôtes ». Le format impose
   alors deux voix, et la consigne écrite en dessous lui demande l'inverse.
   Quand les deux se contredisent, c'est le format qui gagne — il choisit le
   gabarit avant que la consigne soit lue.

   « Débat » met lui aussi deux hôtes. « Critique » examine les sources pour
   *aider à améliorer le contenu* : il commenterait le parcours au lieu de
   l'expliquer.

5. Coller la consigne ci-dessous, en remplaçant le nom du parcours.
6. Générer, puis télécharger le `.m4a`.

## 3. La consigne à coller

Elle est **déjà écrite, avec le nom du parcours dedans**, dans un fichier à
côté de la source :

```
podcasts/sources/apprendre-consigne.txt
podcasts/sources/cybersecurite-consigne.txt
…
```

Ouvrir, tout copier, coller dans « Sur quoi les hôtes IA devraient-ils se
concentrer ? ». **Il n'y a rien à remplacer.**

Auparavant la consigne était un modèle unique où il fallait changer « Finance »
à la main. Deux épisodes sur trois sont partis en gardant le nom de l'exemple —
« Voici l'essentiel sur la protection de ta vie numérique, tirée de notre
**parcours finance** ». Le défaut tombe dans la première phrase, donc
impossible à rattraper autrement qu'en régénérant.

Ces fichiers sont produits par `node scripts/exporter-parcours.js`, en même
temps que les sources.

## 4. Me redonner les fichiers

Déposer les `.m4a` téléchargés dans `podcasts/brut/`, nommés **exactement**
comme le parcours :

```
podcasts/brut/finance.m4a      podcasts/brut/ia.m4a      …
```

Les noms viennent de `assets/js/parcours.js` : un fichier mal nommé est refusé
avec son nom, il ne part pas en ligne par erreur. Ne pas laisser deux fichiers
pour le même parcours — la chaîne s'arrête plutôt que de deviner lequel est le
bon.

Puis, côté site :

```
node scripts/preparer-audio.js
node scripts/publier-podcasts.js
```

La masterisation vérifie l'entrée (refus si le son est saturé) et la sortie
(niveau, crête et durée), et **supprime** le résultat s'il ne tient pas ses
promesses : un fichier qui sature est pire qu'un fichier absent, parce qu'il
part en ligne sans que personne le réécoute.
