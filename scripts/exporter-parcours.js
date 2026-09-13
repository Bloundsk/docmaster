#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * CLICKED — EXPORTER UN PARCOURS EN TEXTE, POUR NOTEBOOKLM
 *
 * NotebookLM fabrique son episode a partir des documents qu on lui donne. Lui
 * donner l URL du site marcherait mal : il lirait la navigation, le pied de
 * page, la rubrique des actualites, et l episode parlerait de tout sauf du
 * cours. On lui donne donc un texte propre, un fichier par parcours, ne
 * contenant que le cours lui-meme.
 *
 * Pourquoi un script plutot qu un copier-coller : les guides changent. Un
 * texte copie a la main serait fige au jour de la copie, et l episode
 * raconterait une version du parcours qui n existe plus, sans que rien ne le
 * signale. Ici, on relance le script et le texte suit.
 *
 * Ce qui est retire, et pourquoi :
 *   - tout ce qui est hors <main> : navigation, fil d Ariane, pied de page
 *   - les blocs <script> et <style>, qui n ont rien a dire a l oreille
 *   - les SVG d illustration, qui produiraient des lignes de coordonnees
 *
 * Ce qui est garde : les titres, dans leur hierarchie, et le texte. Les titres
 * comptent — ils donnent a NotebookLM le plan du parcours, donc la structure de
 * l episode.
 *
 * TROIS LANGUES depuis le 13 septembre 2026, a la demande de Ludo : les
 * episodes anglais et hongrois sont fabriques comme les francais, a partir
 * des guides TRADUITS. Traduire l audio francais aurait perdu ce que la
 * traduction des guides a deja tranche (termes, exemples, regles dites
 * francaises) ; partir du guide de la langue les reprend tels quels.
 *
 *   node scripts/exporter-parcours.js                  tous les parcours, en francais
 *   node scripts/exporter-parcours.js finance          un seul
 *   node scripts/exporter-parcours.js --langue=en      en anglais  -> podcasts/sources/en/
 *   node scripts/exporter-parcours.js --langue=hu      en hongrois -> podcasts/sources/hu/
 * ------------------------------------------------------------------------- */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RACINE = path.join(__dirname, "..");

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/parcours.js"), "utf8"), bac);
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

/* Le texte d une page. On travaille sur le HTML brut plutot que sur un arbre :
   le site n a aucune dependance, et en ajouter une pour retirer des balises
   serait cher paye. */
function texteDe(html) {
    const dansMain = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    let t = dansMain ? dansMain[1] : html;

    t = t.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, " ");
    // Les blocs qu on ne veut pas entendre : navigation entre guides et
    // renvois vers d autres parcours. Ce sont des liens, pas du cours.
    t = t.replace(/<div class="(guide-nav|related-guides)"[\s\S]*?<\/div>/gi, " ");

    /* Le lecteur audio du parcours, s il existe deja. Sans cette ligne,
       l export de Finance contenait « En un mot, avant de commencer » et
       « Voix de synthese » : on aurait donne a NotebookLM, comme matiere, la
       presentation de l episode qu il doit justement produire. L episode se
       serait mis a parler de lui-meme. */
    t = t.replace(/<section class="intro-audio"[\s\S]*?<\/section>/gi, " ");

    // Les titres deviennent des lignes de titre, pour garder le plan.
    t = t.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi,
        (_, n, contenu) => `\n\n${"#".repeat(Number(n))} ${contenu.replace(/<[^>]+>/g, " ")}\n\n`);
    // Les fins de bloc valent une fin de paragraphe.
    t = t.replace(/<\/(p|li|div|section|tr|summary|details)>/gi, "\n");
    t = t.replace(/<[^>]+>/g, " ");

    return decoder(t).replace(/[ \t]+/g, " ")
            .replace(/ *\n */g, "\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
}

function decoder(t) {
    const entites = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"',
                      "&#39;": "'", "&apos;": "'", "&nbsp;": " ", "&hellip;": "…" };
    return t.replace(/&[a-z#0-9]+;/gi, (e) => entites[e] ?? e);
}

/* Le texte a coller dans « Personnaliser » de NotebookLM, par langue.

   Il est ecrit DANS la langue de l episode. Une consigne francaise pour un
   episode anglais aurait deux defauts : NotebookLM reprend parfois des
   tournures de la consigne dans ce qu il dit (la note de prononciation de
   « Clicked » s est deja fait lire a voix haute, le 29 aout), et un exemple
   francais — « plan d epargne en actions » — n a pas de sens pour qui ecoute
   en anglais.

   Chaque version garde les memes regles que la francaise, validee a l ecoute :
   une voix, trois temps annonces, une phrase de synthese, pas de sigle, le
   rappel pedagogique. Le tutoiement devient le « te » hongrois ; l anglais
   n a pas de distinction, la consigne demande seulement de s adresser
   directement a l auditeur. */
const LANGUES = {
    fr: {
        guides: "guides",
        sortie: path.join("podcasts", "sources"),
        date: "fr-FR",
        entete: (nom, n, date) => `Parcours ${nom} — Clicked\nSource : ${n} page(s) du parcours, exportées le ${date}.\n`,
        consigne: (nom) => `Produis un résumé audio en français d'environ 90 secondes, avec une seule voix — pas de dialogue entre deux animateurs.

Le parcours s'appelle « ${nom} ». C'est de CE parcours que tu parles, et d'aucun autre : ne mentionne jamais un autre parcours du site.

Le site s'appelle Clicked. À l'oral ce nom se dit à l'anglaise, « klikt », jamais « cliquet ». N'explique pas cette prononciation à l'auditeur : contente-toi de la respecter.

Tutoie l'auditeur du début à la fin. Jamais de « vous ».

Structure : annonce à voix haute « Premièrement », « Deuxièmement », « Enfin » pour marquer les trois temps du parcours. Termine par une phrase de synthèse qui donne l'idée forte à retenir.

Registre parlé, vivant, avec des analogies concrètes du quotidien. Pas de tableau, pas de chiffre qu'on ne puisse retenir en l'entendant une fois.

N'emploie aucun sigle : dis « fonds indiciels » et non « ETF », « plan d'épargne en actions » et non « PEA ». Un sigle se prononce mal à l'oral et l'auditeur décroche.

Rappelle en une phrase, vers la fin, qu'il s'agit de pédagogie et non de conseil personnalisé.
`,
    },
    en: {
        guides: path.join("en", "guides"),
        sortie: path.join("podcasts", "sources", "en"),
        date: "en-GB",
        entete: (nom, n, date) => `Learning path: ${nom} — Clicked\nSource: ${n} page(s) of the path, exported on ${date}.\n`,
        consigne: (nom) => `Produce an audio summary in English of about 90 seconds, with a single voice — no dialogue between two hosts.

The learning path is called "${nom}". Talk about THIS path and no other: never mention another path on the site.

The site is called Clicked, said exactly like the English word "clicked". Do not explain the pronunciation to the listener: simply say it that way.

Speak directly to the listener as "you", in a warm and informal tone, from start to finish.

Structure: say out loud "First", "Second" and "Finally" to mark the three stages of the path. End with one summary sentence that gives the key idea to remember.

A lively, spoken register, with concrete everyday analogies. No tables, and no figure that cannot be remembered after hearing it once.

Use no acronyms: say "index funds", not "ETFs". An acronym is hard to follow by ear, and the listener drops off.

Near the end, remind the listener in one sentence that this is education, not personal advice.
`,
    },
    hu: {
        guides: path.join("hu", "guides"),
        sortie: path.join("podcasts", "sources", "hu"),
        date: "hu-HU",
        entete: (nom, n, date) => `Útmutató: ${nom} — Clicked\nForrás: az útmutató ${n} oldala, exportálva: ${date}.\n`,
        consigne: (nom) => `Készíts körülbelül 90 másodperces hangos összefoglalót magyarul, egyetlen hanggal — ne legyen párbeszéd két műsorvezető között.

Az útmutató címe: „${nom}”. Erről az útmutatóról beszélj, és semmi másról: soha ne említs más útmutatót az oldalról.

Az oldal neve Clicked, angolosan ejtve: „klikt”. Ne magyarázd el a kiejtést a hallgatónak, egyszerűen így mondd.

Tegezd a hallgatót az elejétől a végéig. Soha ne magázódj.

Felépítés: mondd ki hangosan, hogy „Először”, „Másodszor” és „Végül”, így jelöld az útmutató három szakaszát. Egy összegző mondattal zárj, amely a legfontosabb gondolatot adja át.

Élő, beszélt nyelvi stílus, hétköznapi, kézzelfogható hasonlatokkal. Ne legyen táblázat, és ne legyen olyan szám, amelyet egyszeri hallásra nem lehet megjegyezni.

Ne használj rövidítéseket: mondd azt, hogy „indexalapok”, ne azt, hogy „ETF”. A rövidítést fülre nehéz követni, és a hallgató elveszíti a fonalat.

A vége felé egy mondatban emlékeztesd a hallgatót arra, hogy ez oktatás, nem személyre szabott tanácsadás.
`,
    },
};

/* Le nom du parcours DANS LA LANGUE : parcours.js ne porte que le titre
   francais. Pour l anglais et le hongrois, on le lit dans le <h1> du sommaire
   traduit — le nom meme que l auditeur verra en ouvrant le guide. */
function nomDuParcours(sujet, langue) {
    if (langue === "fr") return PARCOURS[sujet].titre.replace(/^[^\p{L}]+/u, "").trim();
    const sommaire = path.join(RACINE, LANGUES[langue].guides, sujet, "index.html");
    if (!fs.existsSync(sommaire)) return null;
    const h1 = (fs.readFileSync(sommaire, "utf8").match(/<h1>([\s\S]*?)<\/h1>/) || [])[1];
    return h1 ? decoder(h1.replace(/<[^>]+>/g, "")).replace(/^[^\p{L}]+/u, "").trim() : null;
}

function exporter(sujet, langue) {
    const L = LANGUES[langue];
    const meta = PARCOURS[sujet];
    if (!meta) {
        console.error(`  ✗ « ${sujet} » n'est pas un parcours de parcours.js`);
        return false;
    }
    const nom = nomDuParcours(sujet, langue);
    if (!nom) {
        console.error(`  ✗ ${sujet} : pas de sommaire lisible dans ${L.guides}/${sujet}/`);
        return false;
    }
    const pages = ["index", ...meta.niveaux];
    const morceaux = [];

    for (const page of pages) {
        const chemin = path.join(RACINE, L.guides, sujet, `${page}.html`);
        if (!fs.existsSync(chemin)) continue;
        const texte = texteDe(fs.readFileSync(chemin, "utf8"));
        if (texte) morceaux.push(texte);
    }
    if (!morceaux.length) {
        console.error(`  ✗ ${sujet} : aucune page lisible`);
        return false;
    }

    const date = new Date().toLocaleDateString(L.date, { timeZone: "Europe/Paris" });
    const sortie = path.join(RACINE, L.sortie);
    fs.mkdirSync(sortie, { recursive: true });
    fs.writeFileSync(path.join(sortie, `${sujet}.txt`),
        `${L.entete(nom, pages.length, date)}\n${morceaux.join("\n\n")}\n`, "utf8");

    /* La consigne A COLLER, ecrite ici avec le nom du parcours DEJA DEDANS.

       Elle etait auparavant un modele unique, dans lequel il fallait remplacer
       « Finance » a la main. Deux episodes sur trois sont partis en gardant le
       nom de l exemple : « Voici l essentiel sur la protection de ta vie
       numerique, tiree de notre PARCOURS FINANCE ». Le defaut est dans la
       premiere phrase, donc impossible a rattraper au montage.

       Demander a quelqu un de tenir deux choses d accord, c est le defaut que
       ce depot corrige partout ailleurs. Il n y a plus rien a remplacer : un
       fichier par parcours, on copie, on colle. */
    fs.writeFileSync(path.join(sortie, `${sujet}-consigne.txt`), L.consigne(nom), "utf8");

    const mots = morceaux.join(" ").split(/\s+/).length;
    console.log(`  ✓ ${sujet.padEnd(16)} ${String(mots).padStart(6)} mots  →  ${path.join(L.sortie, sujet)}.txt + consigne   (« ${nom} »)`);
    return true;
}

const langue = (process.argv.find((a) => a.startsWith("--langue=")) || "--langue=fr").split("=")[1];
if (!LANGUES[langue]) {
    console.error(`Langue inconnue : « ${langue} ». Langues possibles : ${Object.keys(LANGUES).join(", ")}.`);
    process.exit(1);
}
const demandes = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const sujets = demandes.length ? demandes : Object.keys(PARCOURS);
let echecs = 0;
for (const s of sujets) if (!exporter(s, langue)) echecs++;
console.log(`\n${sujets.length - echecs} parcours exporté(s) dans ${LANGUES[langue].sortie.replace(/\\/g, "/")}/.`);
process.exit(echecs ? 1 : 0);
