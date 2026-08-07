// ===================================
// DOCMASTER - SCRIPT DE VEILLE (v2 : déduplication + nettoyage)
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

const NB_JOURS_AVANT_FERMETURE = 14; // ferme automatiquement les anciennes veilles

async function recupererArticles(requete) {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(requete)}&hl=fr&gl=FR&ceid=FR:fr`;
    const reponse = await fetch(url);
    const xml = await reponse.text();

    const articles = [];
    const items = xml.split("<item>").slice(1, 5); // un peu de marge pour la déduplication

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

// Récupère les liens déjà proposés dans les 20 dernières Issues de veille
async function recupererLiensDejaProposes(repo, token) {
    const reponse = await fetch(
        `https://api.github.com/repos/${repo}/issues?labels=veille&state=all&per_page=20`,
        { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" } }
    );
    if (!reponse.ok) return new Set();

    const issues = await reponse.json();
    const liens = new Set();
    for (const issue of issues) {
        const matches = (issue.body || "").matchAll(/\((https?:\/\/[^\)]+)\)/g);
        for (const m of matches) liens.add(m[1]);
    }
    return liens;
}

async function construireRapport(liensDejaProposes) {
    const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    const heure = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    let rapport = `# 📰 Veille DocMaster — ${date} (${heure})\n\n`;
    rapport += `Voici les articles récents trouvés pour chaque catégorie (les articles déjà proposés récemment sont automatiquement filtrés).\n\n---\n\n`;

    let totalArticles = 0;

    for (const categorie of categories) {
        rapport += `## ${categorie.nom}\n\n`;
        try {
            const articles = await recupererArticles(categorie.requete);
            const nouveaux = articles.filter(a => !liensDejaProposes.has(a.lien));

            if (nouveaux.length === 0) {
                rapport += `_Rien de nouveau par rapport à la dernière veille._\n\n`;
            } else {
                for (const article of nouveaux.slice(0, 3)) {
                    rapport += `- [${article.titre}](${article.lien})\n`;
                    totalArticles++;
                }
                rapport += `\n`;
            }
        } catch (erreur) {
            rapport += `_Erreur lors de la récupération des articles._\n\n`;
        }
    }

    return { rapport, totalArticles };
}

async function creerIssue(contenu) {
    const repo = process.env.GITHUB_REPOSITORY;
    const token = process.env.GITHUB_TOKEN;
    const date = new Date().toLocaleDateString("fr-FR");
    // La veille tourne deux fois par jour : sans l'heure, les deux Issues du
    // jour porteraient exactement le même titre et seraient indistinguables.
    const heure = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    const reponse = await fetch(`https://api.github.com/repos/${repo}/issues`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
        body: JSON.stringify({
            title: `📰 Veille — ${date} à ${heure}`,
            body: contenu,
            labels: ["veille"],
        }),
    });

    if (!reponse.ok) throw new Error(`Erreur création Issue : ${await reponse.text()}`);
    console.log("Issue créée avec succès !");
}

// Ferme automatiquement les Issues de veille de plus de NB_JOURS_AVANT_FERMETURE jours
async function fermerAnciennesIssues(repo, token) {
    const reponse = await fetch(
        `https://api.github.com/repos/${repo}/issues?labels=veille&state=open&per_page=50`,
        { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" } }
    );
    if (!reponse.ok) return;

    const issues = await reponse.json();
    const maintenant = Date.now();

    for (const issue of issues) {
        const age = (maintenant - new Date(issue.created_at).getTime()) / (1000 * 60 * 60 * 24);
        if (age > NB_JOURS_AVANT_FERMETURE) {
            await fetch(`https://api.github.com/repos/${repo}/issues/${issue.number}`, {
                method: "PATCH",
                headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
                body: JSON.stringify({ state: "closed" }),
            });
            console.log(`Issue #${issue.number} fermée automatiquement (${Math.round(age)} jours).`);
        }
    }
}

(async () => {
    try {
        const repo = process.env.GITHUB_REPOSITORY;
        const token = process.env.GITHUB_TOKEN;

        const liensDejaProposes = await recupererLiensDejaProposes(repo, token);
        const { rapport, totalArticles } = await construireRapport(liensDejaProposes);

        if (totalArticles > 0) {
            await creerIssue(rapport);
        } else {
            console.log("Aucun article nouveau — pas d'Issue créée cette fois.");
        }

        await fermerAnciennesIssues(repo, token);
    } catch (erreur) {
        console.error("Erreur :", erreur);
        process.exit(1);
    }
})();
