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
//   96 kb/s           Mesure plutot que suppose : a 64 kb/s, l encodeur ajoute
//                     2 dB de depassement de crete — le WAV sortait a
//                     -2,4 dBTP et le MP3 a -0,4, c est-a-dire au bord de la
//                     saturation. A 96 kb/s le depassement tombe a 0,5 dB.
//                     Le poids passe de 4,4 a 6,6 Mo par episode : le prix de
//                     ne pas saturer.
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

/* --------------------------------------------------------------------------
   LES CONTROLES, AVANT ET APRES

   Trois defauts sont partis en production avant d etre trouves a l oreille par
   Ludo : un decoupage qui hachait la voix, 171 echantillons ecretes, et des
   parasites de generation. Les deux derniers etaient MESURABLES — ils ne
   l ont pas ete, parce que les mesures faites l etaient au mauvais endroit :
   sur le MP3 final, ou la masterisation avait deja tout ramene sous zero.

   D ou deux barrages, et ils bloquent :

     avant  le WAV entrant ne doit pas etre ecrete. Un son sature ne se
            repare pas au montage — baisser le volume d un son sature ne le
            desature pas.
     apres  le MP3 produit doit tenir ses promesses : niveau, crete, duree.
            Le MP3 a 64 kb/s ajoutait 2 dB de depassement sans que rien ne le
            dise.

   Un fichier qui echoue n entre pas en production. Une erreur bruyante vaut
   mieux qu un episode qui craque chez l auditeur.
   -------------------------------------------------------------------------- */

// Une mesure de ffmpeg, lue dans son journal (qu il ecrit sur stderr).
function mesurer(fichier, filtre, clefs) {
    const r = spawnSync("ffmpeg", [
        "-hide_banner", "-nostats", "-i", fichier, "-af", filtre, "-f", "null", "-",
    ], { encoding: "utf8" });
    const journal = (r.stderr || "") + (r.stdout || "");
    const valeurs = {};
    for (const [nom, motif] of Object.entries(clefs)) {
        const m = journal.match(motif);
        valeurs[nom] = m ? Number(m[1]) : null;
    }
    return valeurs;
}

// Combien d echantillons touchent le maximum. Au-dela d une poignee, le
// fichier est ecrete : ce sont autant de craquements.
const ECRETAGE_TOLERE = 8;

function verifierEntree(source) {
    const { satures } = mesurer(source, "astats=metadata=1",
        { satures: /Abs Peak count:\s*([\d.]+)/ });
    if (satures === null) return null;               // mesure indisponible : on ne bloque pas
    if (satures > ECRETAGE_TOLERE) {
        return `${satures} échantillons saturés dans la source — le son craquera. ` +
               `Régénérer en abaissant le niveau avant écriture.`;
    }
    return null;
}

function verifierSortie(cible, secondesSource) {
    const m = mesurer(cible, "loudnorm=print_format=summary", {
        niveau: /Input Integrated:\s*(-?[\d.]+)/,
        crete: /Input True Peak:\s*(-?[\d.]+)/,
    });
    /* Chaque mesure est testee SEPAREMENT, et une mesure absente n est pas une
       mesure ratee. Le premier jet sortait tot des que le niveau manquait, puis
       comparait la crete sans verifier qu elle existait : « null > -0.5 » vaut
       vrai en JavaScript, null se comparant comme zero. Le controle a bloque un
       fichier en annoncant « crête à null dBTP » — il avait raison de bloquer,
       mais pour une raison inventee. Un controle qui se declenche quand il ne
       sait pas mesurer finira par bloquer un fichier sain. */
    if (m.crete === null && m.niveau === null) return null;   // ffmpeg muet

    if (m.crete !== null && m.crete > -0.5) {
        return `crête à ${m.crete} dBTP — au bord de la saturation. ` +
               `L'encodage MP3 ajoute du dépassement : baisser TP dans loudnorm.`;
    }
    if (m.niveau !== null && Math.abs(m.niveau + 16) > 2.5) {
        return `niveau à ${m.niveau} LUFS, loin des -16 attendus.`;
    }
    // Une duree qui bouge signale un fichier tronque, pas un reglage.
    const s = secondes(cible);
    if (s && secondesSource && Math.abs(s - secondesSource) / secondesSource > 0.01) {
        return `durée de ${s.toFixed(0)} s contre ${secondesSource.toFixed(0)} s à la source.`;
    }
    return null;
}

function secondes(fichier) {
    try {
        const s = execFileSync("ffprobe", [
            "-v", "error", "-show_entries", "format=duration",
            "-of", "default=nw=1:nk=1", fichier,
        ], { encoding: "utf8" }).trim();
        const t = Number(s);
        return Number.isFinite(t) ? t : null;
    } catch (e) {
        return null;
    }
}

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

/* Deux fichiers pour le meme parcours : « finance.wav » et « finance.mp3 »
   dans le meme dossier. Le second est le RESULTAT range la par erreur ; le
   script le prenait pour une source, le reencodait, et le dernier lu ecrasait
   l autre — en silence, l ordre du dossier decidant du gagnant.
   Un reencodage degrade a chaque passage. On refuse plutot que d arbitrer. */
const parSujet = new Map();
for (const f of fs.readdirSync(BRUT)) {
    const ext = path.extname(f).toLowerCase();
    if (!EXTENSIONS.includes(ext)) continue;
    const s = path.basename(f, ext);
    parSujet.set(s, [...(parSujet.get(s) || []), f]);
}
const ambigus = [...parSujet].filter(([, fichiers]) => fichiers.length > 1);
if (ambigus.length) {
    console.error("Plusieurs fichiers portent le même parcours — lequel est la source ?");
    for (const [sujet, fichiers] of ambigus) {
        console.error(`  ${sujet} : ${fichiers.join(", ")}`);
    }
    console.error("N'en garder qu'un dans podcasts/brut/.");
    process.exit(1);
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

    // Barrage d entree : un son sature ne se repare pas au montage.
    const defautEntree = verifierEntree(source);
    if (defautEntree) {
        console.error(`  ✗ ${fichier} : ${defautEntree}`);
        refuses++;
        continue;
    }

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

    /* La masterisation, avant la mise a niveau. Trois traitements, et chacun
       repond a un defaut entendu :

         highpass 80 Hz   le grondement, les bruits de manipulation, le
                          souffle de la piece. Rien d utile ne vit sous 80 Hz
                          dans une voix parlee.
         acompressor      resserre l ecart entre les passages forts et faibles.
                          C est CE traitement qui donne l impression que la
                          voix est PROCHE, comme quelqu un assis en face —
                          l effet que cherche un podcast d explication.
         equalizer 3 kHz  la bande de l intelligibilite. +2,5 dB, et on
                          comprend sans effort, meme en marchant dans la rue.

       Ce qui n y est PAS : aucun debruitage. Il durcit les consonnes, et sur
       un enregistrement dont les silences sont deja vides il ne gagne rien —
       mesure sur la prise retenue : plancher a -inf avec comme sans.

       Et surtout : rien de tout cela ne rend une voix expressive. Un filtre
       deplace des frequences, il n invente pas une montee de voix sur une
       question. L expressivite se joue a la generation. */
    const MASTERISATION = "highpass=f=80," +
        "acompressor=threshold=-20dB:ratio=3:attack=15:release=200:makeup=1," +
        "equalizer=f=3000:width_type=o:width=1.2:g=2.5,";

    /* Un limiteur EN DERNIER, et il n est pas decoratif.
       Mesure sans lui : +0,5 dBTP, c est-a-dire au-dessus de zero — ca sature,
       et ca s entend comme une durete sur les consonnes. La cause est double :
       le rattrapage de 2 dB du compresseur, et « linear=true » qui fait
       appliquer a loudnorm un gain constant, sans limitation dynamique. Il
       respecte alors la cible de NIVEAU en manquant celle de CRETE.
       Le limiteur rattrape ce que le gain constant laisse passer. */
    const filtre = MASTERISATION + (m
        ? `loudnorm=I=-16:TP=-2:LRA=9:measured_I=${m.input_i}:measured_TP=${m.input_tp}` +
          `:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}`
        : "loudnorm=I=-16:TP=-2:LRA=9") +
        ",alimiter=limit=0.891:attack=5:release=50:level=disabled";   // filet, ≈ -1 dBFS

    execFileSync("ffmpeg", [
        "-y", "-loglevel", "error", "-i", source,
        "-af", filtre, "-ac", "1", "-ar", "44100", "-b:a", "96k",
        cible,
    ], { stdio: ["ignore", "ignore", "pipe"] });

    /* Barrage de sortie. Le fichier fautif est SUPPRIME plutot que laisse en
       place : un MP3 qui sature est pire qu un MP3 absent, parce qu il part en
       ligne sans que personne le reecoute. */
    const defautSortie = verifierSortie(cible, secondes(source));
    if (defautSortie) {
        fs.unlinkSync(cible);
        console.error(`  ✗ ${sujet} : ${defautSortie}`);
        console.error(`     fichier supprimé — il ne partira pas en production.`);
        refuses++;
        continue;
    }

    const ko = Math.round(fs.statSync(cible).size / 1024);
    console.log(`  ✓ ${sujet.padEnd(16)} ${duree(cible).padStart(12)}   ${String(ko).padStart(6)} Ko${m ? "" : "   (mesure illisible, passe simple)"}`);
    traites++;
}

console.log(`\n${traites} fichier(s) préparé(s)` +
    (ignores ? `, ${ignores} inchangé(s)` : "") +
    (refuses ? `, ${refuses} refusé(s)` : "") + ".");
if (traites) console.log("Puis :  node scripts/publier-podcasts.js");
process.exit(refuses ? 1 : 0);
