// ===================================
// DOCMASTER AI - SCRIPT DE VEILLE HEBDOMADAIRE
// ===================================

const categories = [
    { nom: "💰 Finance", requete: "investissement finance ETF bourse épargne" },
    { nom: "🤖 Intelligence Artificielle", requete: "intelligence artificielle nouveauté modèle" },
    { nom: "💻 Développement Web", requete: "développement web JavaScript CSS framework" },
    { nom: "📢 Marketing Digital", requete: "marketing digital SEO tendances" },
    { nom: "🔒 Cybersécurité", requete: "cybersécurité vulnérabilité alerte piratage" },
    { nom: "🚀 Entrepreneuriat", requete: "entrepreneuriat startup financement France" },
    { nom: "⏱️ Productivité", requete: "productivité méthode travail organisation" },
    { nom: "📊 Data & Analytics", requete: "data analytics données statistiques" },
    { nom: "🎨 Design UX/UI", requete: "design UX UI interface tendances" },
];

// Récupère les articles récents pour une catégorie via Google Actualités
async function recupererArticles(requete) {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(requete)}&hl=fr&gl=FR&ceid=FR:fr`;
    const reponse = await fetch(url);
    const xml = await reponse.text();

    const articles = [];
    const items = xml.split("<item>").slice(1, 4); // les 3 premiers résultats

    for (const item of items) {
        const titreMatch = item.match(/<title>(.*?)<\/title>/s);
        const lienMatch = item.match(/<link>(.*?)<\/link>/s);

        if (titreMatch && lienMatch) {
            articles.push({
                titre: titreMatch[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim(),
                lien: lienMatch[1].trim(),
            });
        }
    }

    return articles;
}

// Construit le contenu de l'Issue GitHub
async function construireRapport() {
    const date = new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    let rapport = `# 📰 Veille DocMaster AI — ${date}\n\n`;
    rapport += `Voici les articles récents trouvés pour chaque catégorie. Passe en revue ceux qui semblent pertinents pour enrichir les guides.\n\n---\n\n`;

    for (const categorie of categories) {
        rapport += `## ${categorie.nom}\n\n`;
        try {
            const articles = await recupererArticles(categorie.requete);
            if (articles.length === 0) {
                rapport += `_Aucun article trouvé cette semaine._\n\n`;
            } else {
                for (const article of articles) {
                    rapport += `- [${article.titre}](${article.lien})\n`;
                }
                rapport += `\n`;
            }
        } catch (erreur) {
            rapport += `_Erreur lors de la récupération des articles._\n\n`;
        }
    }

    return rapport;
}

// Crée l'Issue sur GitHub via l'API
async function creerIssue(contenu) {
    const repo = process.env.GITHUB_REPOSITORY; // format: "utilisateur/docmaster"
    const token = process.env.GITHUB_TOKEN;

    const date = new Date().toLocaleDateString("fr-FR");

    const reponse = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: `📰 Veille hebdomadaire — ${date}`,
            body: contenu,
            labels: ["veille"],
        }),
    });

    if (!reponse.ok) {
        const erreur = await reponse.text();
        throw new Error(`Erreur création Issue : ${erreur}`);
    }

    console.log("Issue créée avec succès !");
}

// Exécution principale
(async () => {
    try {
        const rapport = await construireRapport();
        await creerIssue(rapport);
    } catch (erreur) {
        console.error("Erreur :", erreur);
        process.exit(1);
    }
})();
