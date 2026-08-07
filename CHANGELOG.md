# Changelog — DocMaster

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
