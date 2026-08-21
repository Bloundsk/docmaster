// ===================================
// CLICKED - PREPARATION DES FICHIERS AUDIO
// ===================================
//
// Prend les enregistrements bruts de podcasts/brut/ et en fait les MP3 servis
// par le site, dans assets/audio/. Puis publier-podcasts.js les met dans la
// page et dans le flux.
//
//   podcasts/brut/finance.wav   ->   assets/audio/finance.mp3
//
// POURQUOI UN SCRIPT PLUTOT QU UNE COMMANDE A RETAPER
//
// Ces reglages doivent etre IDENTIQUES d un episode a l autre. Un auditeur qui
// enchaine deux episodes et doit toucher au volume entre les deux entend le
// defaut immediatement, et c est le genre de detail qui fait arreter d ecouter.
// Retaper une commande ffmpeg quatorze fois garantit qu elle finira par
// differer une fois.
//
// LES REGLAGES, ET CE QU ILS VALENT
//
//   loudnorm I=-16    Niveau percu, en LUFS. C est la cible courante des
//                     podcasts. Ce n est PAS un volume maximal : c est une
//                     moyenne percue, ce qui est justement ce que l oreille
//                     compare entre deux episodes.
//   TP=-1.5           Crete reelle maximale, en dB. La marge evite la
//                     saturation lors du reencodage par certaines applications.
//   mono, 44,1 kHz    De la parole. La stereo doublerait le poids pour rien.
//   64 kb/s           Suffisant pour une voix. Au-dela, on encode le bruit de
//                     la piece.
//
// Le calcul de loudnorm se fait en DEUX PASSES : la premiere mesure, la seconde
// corrige. En une seule passe, ffmpeg normalise a l aveugle au fil du fichier
// et le debut d un episode sort plus fort que sa fin.
//
//   node scripts/preparer-audio.js            traite ce qui a change
//   node scripts/preparer-audio.js --tout     retraite tout

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync, spawnSync } = require("child_process");

const RACINE = path.join(__dirname, "..");
const BRUT = path.join(RACINE, "podcasts", "brut");
const SORTIE = path.join(RACINE, "assets", "audio");
const tout = process.argv.includes("--tout");

const EXTENSIONS = [".wav", ".flac", ".m4a", ".mp3", ".aac", ".ogg", ".opus"];

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(fs.readFileSync(path.join(RACINE, "assets/js/parcours.js"), "utf8"), bac);
const PARCOURS = bac.window.DOCMASTER_PARCOURS;

function ffmpegPresent() {
    try {
        execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
        return true;
    } catch (e) {
        return false;
    }
}

if (!ffmpegPresent()) {
    console.error("ffmpeg est introuvable. Installation :");
    console.error("  winget install --id Gyan.FFmpeg --scope user");
    console.error("Puis rouvrir le terminal — le PATH n'est lu qu'au démarrage.");
    process.exit(1);
}

if (!fs.existsSync(BRUT)) {
    console.log(`Aucun dossier ${path.relative(RACINE, BRUT)} — rien à préparer.`);
    console.log("Y déposer les enregistrements, nommés d'après leur parcours :");
    console.log("  podcasts/brut/finance.wav, podcasts/brut/ia.wav, …");
    process.exit(0);
}
fs.mkdirSync(SORTIE, { recursive: true });

// La duree reelle, lue dans le fichier produit. C est elle qui remplacera
// l estimation faite sur le nombre de mots.
function duree(fichier) {
    try {
        const s = execFileSync("ffprobe", [
            "-v", "error", "-show_entries", "format=duration",
            "-of", "default=nw=1:nk=1", fichier,
        ], { encoding: "utf8" }).trim();
        const t = Math.round(Number(s));
        return `${Math.floor(t / 60)} min ${String(t % 60).padStart(2, "0")} s`;
    } catch (e) {
        return "durée inconnue";
    }
}

let traites = 0, ignores = 0, refuses = 0;

for (const fichier of fs.readdirSync(BRUT)) {
    const ext = path.extname(fichier).toLowerCase();
    if (!EXTENSIONS.includes(ext)) continue;

    const sujet = path.basename(fichier, ext);
    if (!PARCOURS[sujet]) {
        console.error(`  ✗ ${fichier} : « ${sujet} » n'est pas un parcours de parcours.js`);
        refuses++;
        continue;
    }

    const source = path.join(BRUT, fichier);
    const cible = path.join(SORTIE, `${sujet}.mp3`);

    // Un enregistrement inchange n a pas a etre reencode : chaque passage
    // degrade un peu, et le fichier changerait dans git sans raison.
    if (!tout && fs.existsSync(cible) &&
        fs.statSync(cible).mtimeMs >= fs.statSync(source).mtimeMs) {
        ignores++;
        continue;
    }

    /* Premiere passe : mesurer.
       ffmpeg ecrit ce JSON sur la SORTIE D ERREUR, apres son journal — comme
       tout ce qu il raconte. Le premier jet lisait la sortie standard, vide
       ici puisque le rendu part vers « null » : la mesure etait donc toujours
       illisible et le script retombait sur la passe simple, en le disant mais
       sans que personne le remarque. D ou spawnSync, qui rend les deux flux. */
    const mesure = spawnSync("ffmpeg", [
        "-hide_banner", "-nostats", "-i", source,
        "-af", "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json",
        "-f", "null", "-",
    ], { encoding: "utf8" });

    const journal = (mesure.stderr || "") + (mesure.stdout || "");
    const bloc = journal.slice(journal.lastIndexOf("{"), journal.lastIndexOf("}") + 1);
    let m = null;
    try { m = JSON.parse(bloc); } catch (e) { /* on retombe sur une passe simple */ }

    const filtre = m
        ? `loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=${m.input_i}:measured_TP=${m.input_tp}` +
          `:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`
        : "loudnorm=I=-16:TP=-1.5:LRA=11";

    execFileSync("ffmpeg", [
        "-y", "-loglevel", "error", "-i", source,
        "-af", filtre, "-ac", "1", "-ar", "44100", "-b:a", "64k",
        cible,
    ], { stdio: ["ignore", "ignore", "pipe"] });

    const ko = Math.round(fs.statSync(cible).size / 1024);
    console.log(`  ✓ ${sujet.padEnd(16)} ${duree(cible).padStart(12)}   ${String(ko).padStart(6)} Ko${m ? "" : "   (mesure illisible, passe simple)"}`);
    traites++;
}

console.log(`\n${traites} fichier(s) préparé(s)` +
    (ignores ? `, ${ignores} inchangé(s)` : "") +
    (refuses ? `, ${refuses} refusé(s)` : "") + ".");
if (traites) console.log("Puis :  node scripts/publier-podcasts.js");
process.exit(refuses ? 1 : 0);
