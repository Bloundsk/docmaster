# Changelog — DocMaster

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
