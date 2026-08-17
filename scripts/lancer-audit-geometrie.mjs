/* ---------------------------------------------------------------------------
 * Lance audit-geometrie.html dans un Chrome sans interface et rend son verdict
 * en code de sortie, pour qu il puisse tourner dans un workflow.
 *
 * POURQUOI CE DETOUR
 *
 * Les autres controles lisent des fichiers. Celui-ci MESURE des pages
 * affichees : une largeur, un nombre de colonnes, un debordement ne se
 * deduisent pas du CSS, il faut un moteur de rendu. Il etait donc le seul a ne
 * pouvoir tourner qu a la main, et il ne tournait que quand on y pensait.
 *
 * POURQUOI PAS PLAYWRIGHT
 *
 * Le site n a aucune dependance, et ce depot non plus. « --virtual-time-budget »
 * suffit : Chrome avance ses minuteries en accelere, execute la page jusqu au
 * bout, puis rend le DOM final. On y lit le verdict que la page a ecrit.
 *
 * Verifie dans les deux sens avant d etre ecrit : « Aucune anomalie » quand
 * tout va bien, et « 8 echec(s) » apres avoir glisse un bloc de 2400 px dans
 * une page. Un controle qui ne peut pas echouer ne vaut rien.
 * ------------------------------------------------------------------------- */
import { spawn, spawnSync } from "node:child_process";
import http from "node:http";
import path from "node:path";
import url from "node:url";

const RACINE = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.PORT_AUDIT || 8099);
const ADRESSE = `http://localhost:${PORT}/scripts/audit-geometrie.html`;

/* Les emplacements habituels de Chrome, du plus specifique au plus general.
   « CHROME » permet de le designer soi-meme, ce dont se sert le workflow. */
const CANDIDATS = [
    process.env.CHROME,
    "google-chrome-stable", "google-chrome", "chromium-browser", "chromium",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].filter(Boolean);

function trouverChrome() {
    for (const c of CANDIDATS) {
        const r = spawnSync(c, ["--version"], { encoding: "utf8" });
        if (!r.error && r.status === 0) return c;
    }
    return null;
}

const attendre = (ms) => new Promise((r) => setTimeout(r, ms));

function serveurPret() {
    return new Promise((resolve) => {
        const requete = http.get(ADRESSE, (rep) => { rep.resume(); resolve(rep.statusCode === 200); });
        requete.on("error", () => resolve(false));
        requete.setTimeout(1000, () => { requete.destroy(); resolve(false); });
    });
}

const chrome = trouverChrome();
if (!chrome) {
    console.error("Chrome introuvable. Indiquez-le par la variable CHROME.");
    process.exit(2);
}
console.log(`Chrome : ${chrome}`);

// Le serveur peut deja tourner — en developpement, on ne veut pas en lancer un
// second sur le meme port.
let serveur = null;
if (!(await serveurPret())) {
    console.log(`Démarrage du serveur local sur le port ${PORT}…`);
    serveur = spawn(process.execPath, [path.join(RACINE, "scripts/serveur.js")], {
        cwd: RACINE, env: { ...process.env, PORT: String(PORT) }, stdio: "ignore",
    });
    for (let i = 0; i < 40 && !(await serveurPret()); i++) await attendre(250);
    if (!(await serveurPret())) {
        serveur.kill();
        console.error("Le serveur local n'a pas démarré.");
        process.exit(2);
    }
}

/* « --virtual-time-budget » est genereux : 104 chargements de page, chacun
   suivi d une pause pour laisser les polices arriver. Une police de repli plus
   etroite fausserait toutes les mesures de largeur. */
const args = [
    "--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
    "--virtual-time-budget=300000", "--dump-dom", ADRESSE,
];

const rendu = spawnSync(chrome, args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
if (serveur) serveur.kill();

if (rendu.error) {
    console.error("Chrome n'a pas pu être lancé :", rendu.error.message);
    process.exit(2);
}

const dom = rendu.stdout || "";
const verdict = dom.match(/id="verdict"[^>]*>([^<]*)</);
if (!verdict) {
    console.error("Verdict introuvable dans le rendu — la page n'a pas fini de mesurer.");
    process.exit(2);
}

console.log(`\n${verdict[1]}`);

// Les lignes en echec, pour ne pas avoir a rouvrir la page pour les lire.
const echecs = [...dom.matchAll(/<tr class="ko">([\s\S]*?)<\/tr>/g)].map((m) =>
    m[1].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());

if (echecs.length) {
    console.error("\nÉchecs :");
    for (const e of echecs) console.error("  - " + e);
}

process.exit(/Aucune anomalie/.test(verdict[1]) ? 0 : 1);
