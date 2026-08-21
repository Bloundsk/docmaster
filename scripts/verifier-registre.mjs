// ===================================
// CLICKED - REGISTRE D'ADRESSE AU LECTEUR
// ===================================
//
// Le site tutoie son lecteur, partout. Quelques passages gardent le
// vouvoiement, et pour de bonnes raisons : les avertissements légaux, les blocs
// de non-conseil, et les paroles rapportées — un courriel d'hameçonnage cité,
// une réplique de négociation, un modèle de lettre. Leur « vous » n'est pas
// adressé au lecteur ; le convertir rendrait l'exemple faux.
//
// Ce contrôle empêche le vouvoiement de revenir par la porte de derrière.
// Sans lui, le prochain guide serait écrit dans le registre de son auteur du
// jour, et le site redeviendrait ce qu'il était : moitié tutoyé, moitié
// vouvoyé, sans que personne ne s'en aperçoive avant d'avoir tout relu.
//
// LE PRINCIPE : le registre ne recule pas. Chaque fichier a un nombre
// d'occurrences autorisées, et sa raison, dans scripts/registre.json. Le
// contrôle échoue si un fichier en porte PLUS que sa référence, ou si un
// fichier absent de la liste en porte.
//
// Il ne dit rien d'une DIMINUTION : convertir une exception restante est
// toujours permis, il suffit d'abaisser le nombre. Un contrôle qui refuserait
// une amélioration serait un frein, pas un garde-fou.
//
//   node scripts/verifier-registre.mjs

import fs from "fs";
import path from "path";
import url from "url";

const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const REFERENCE = path.join(RACINE, "scripts/registre.json");

/* « rendez-vous » est un nom commun : il contient « vous » sans être une
   adresse au lecteur. Il apparaissait dans quatre fichiers et faussait tous
   les décomptes — c'est le faux positif que trois relectures ont signalé. */
const MOTIF = /\b(vous|votre|vos|Vous|Votre|Vos|vôtre|Vôtre)\b/g;
const FAUX_POSITIFS = /\brendez-vous\b/gi;

/* CE QUE CE CONTROLE NE VOIT PAS, et il faut le savoir : l imperatif de
   politesse ne porte aucun pronom. « Notez la date », « Verifiez la source »
   sont du vouvoiement que ce motif laisse passer. Il en restait une soixantaine
   apres la premiere passe de conversion, toutes trouvees a la main.

   Les attraper demanderait une liste de verbes : « assez », « chez », « nez »
   finissent aussi en -ez. Une liste partielle serait pire qu utile — elle
   donnerait l impression d une couverture qu elle n a pas. La limite est donc
   assumee et ecrite ici plutot que devinee plus tard. */

/* On compte ce que le lecteur LIT, pas ce que le fichier contient.

   Deux nettoyages avant de compter, et chacun corrige un faux positif observé :

   — les titres d'articles de la veille sont écrits par des sites tiers et
     republiés tels quels. Leur nombre change chaque jour ; un plafond fixe
     serait franchi au hasard des publications ;
   — les attributs disparaissent avec les balises. Sans cela, l'ancre
     « #vos-donnees-personnelles » — un identifiant, qui doit justement rester
     stable — serait comptée comme une adresse au lecteur. */
function compter(chemin) {
    let texte = fs.readFileSync(chemin, "utf8");
    if (chemin.endsWith(".html")) {
        texte = texte
            .replace(/<a class="actu-titre"[\s\S]*?<\/a>/g, "")
            .replace(/<[^>]*>/g, " ");
    }
    texte = texte.replace(FAUX_POSITIFS, "");
    return (texte.match(MOTIF) || []).length;
}

// Les fichiers francais porteurs de texte lu. « en/ » et « quiz/en/ » en sont
// exclus : l'anglais ne distingue pas le tutoiement du vouvoiement.
function listerFichiers() {
    const fichiers = [];
    const guides = path.join(RACINE, "guides");
    for (const sujet of fs.readdirSync(guides)) {
        const dossier = path.join(guides, sujet);
        if (!fs.statSync(dossier).isDirectory()) continue;
        for (const f of fs.readdirSync(dossier)) {
            if (f.endsWith(".html")) fichiers.push(`guides/${sujet}/${f}`);
        }
    }
    const quiz = path.join(RACINE, "assets/js/quiz");
    for (const f of fs.readdirSync(quiz)) {
        if (f.endsWith(".js")) fichiers.push(`assets/js/quiz/${f}`);
    }
    fichiers.push("assets/js/pratique.js");
    for (const f of fs.readdirSync(RACINE)) {
        if (f.endsWith(".html") && f !== "mentions-legales.html") fichiers.push(f);
    }
    return fichiers;
}

const reference = JSON.parse(fs.readFileSync(REFERENCE, "utf8"));
const anomalies = [];
let total = 0;

for (const relatif of listerFichiers()) {
    const complet = path.join(RACINE, relatif);
    if (!fs.existsSync(complet)) continue;
    const n = compter(complet);
    total += n;
    const autorise = reference.exceptions[relatif];

    if (!autorise) {
        if (n > 0) {
            anomalies.push(`${relatif} : ${n} occurrence(s) de vouvoiement, aucune n'est prévue`);
        }
        continue;
    }
    if (n > autorise.max) {
        anomalies.push(`${relatif} : ${n} occurrence(s), la référence en autorise ${autorise.max} (${autorise.pourquoi})`);
    }
}

console.log("=== REGISTRE D'ADRESSE AU LECTEUR ===");
console.log(`  ${total} occurrence(s) de vouvoiement, ${Object.keys(reference.exceptions).length} fichier(s) autorisés`);

if (!anomalies.length) {
    console.log("\nAucune anomalie.");
    process.exit(0);
}

console.error(`\n[registre] ${anomalies.length} anomalie(s) :`);
for (const a of anomalies) console.error(`  - ${a}`);
console.error(`
[registre] Le site tutoie son lecteur. Deux issues :
  — convertir le passage au tutoiement, ce qui est le cas courant ;
  — s'il s'agit d'un avertissement légal, d'un bloc de non-conseil ou d'une
    parole rapportée, l'inscrire dans scripts/registre.json en disant pourquoi.
`);
process.exit(1);
