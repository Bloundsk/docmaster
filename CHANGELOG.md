# Changelog — DocMaster

## 2026-08-08 — Boîte à idées : envoi direct, et plus aucun cookie
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

## 2026-08-08 — Mon espace et favoris
- **Bouton favori** sur les 9 catégories et les 37 sous-sections
- Nouvelle page **Mon espace** : favoris regroupés par guide, guides terminés, progression
- Aucun compte, aucun mot de passe, aucune adresse : tout reste dans le navigateur du
  visiteur, comme le thème ou la progression de lecture
- Bouton « Tout effacer » pour reprendre la main sur ces données

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
