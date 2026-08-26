# ===================================
# CLICKED - GENERATION DE LA VOIX DES PODCASTS
# ===================================
#
# Lit podcasts/<sujet>.md et en fait podcasts/brut/<sujet>.wav, dans la voix de
# reference. Ensuite : scripts/preparer-audio.js normalise et encode,
# scripts/publier-podcasts.js publie.
#
# L UNITE DE GENERATION EST LE PARAGRAPHE
#
# Le premier jet generait PHRASE PAR PHRASE, pour empecher la voix de deriver
# sur huit minutes. Il empechait la derive et produisait pire : chaque phrase
# repartait a zero, meme hauteur, meme attaque, separee de la suivante par un
# blanc mecanique. A l ecoute, on entendait le montage — et personne ne tient
# neuf minutes la-dessus. Ludo l a dit sans detour, et il avait raison.
#
# La preuve etait pourtant deja la : le seul extrait qu il avait valide etait
# genere D UN SEUL TENANT. C est le decoupage qui cassait tout, pas le modele.
#
# Un paragraphe fait deux a cinq phrases. Assez long pour que le modele
# enchaine et fasse varier l intonation d une phrase a l autre ; assez court
# pour ne pas deriver. C est l unite de sens, c est donc l unite de generation.
#
# LES SILENCES SONT DU CONTENU
#
# Un texte lu sans respiration est illisible a l oreille. Les blancs poses ici
# suivent la structure du texte : plus long entre deux parties qu entre deux
# phrases. C est ce qui donne l impression que quelqu un reflechit plutot que
# recite.
#
#   python scripts/generer-voix.py finance
#   python scripts/generer-voix.py finance --langue en
#   python scripts/generer-voix.py --tout

import argparse
import math
import re
import sys
import time
from pathlib import Path

# La console Windows ecrit en cp1252, qui ne connait ni « ✓ » ni les accents.
# Sans cette ligne, le script fabriquait tout l audio PUIS mourait sur son
# dernier print — UnicodeEncodeError. Le fichier etait bon, le script en echec,
# et un appel automatise n aurait vu que l echec. On force donc l UTF-8, en
# remplacant ce qui ne passe pas plutot qu en s arretant : un compte rendu
# illisible vaut mieux qu un traitement perdu.
for flux in (sys.stdout, sys.stderr):
    try:
        flux.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

RACINE = Path(__file__).resolve().parent.parent
EPISODES = RACINE / "podcasts"
SORTIE = EPISODES / "brut"
VOIX = EPISODES / "voix"

# Une reference PAR LANGUE, et non une seule pour toutes. Un modele qui doit
# produire de l anglais a partir d une reference francaise herite d une
# prosodie qui ne colle pas : l accent tonique tombe a cote, les fins de phrase
# montent la ou l anglais descend. La meme personne, lisant dans la langue de
# sortie, donne un resultat sans commune mesure.
def reference_de(langue):
    return VOIX / f"voix-reference-{langue}.wav"

# Silences, en secondes. Mesures a l oreille sur des podcasts de parole : plus
# court parait precipite, plus long parait vide. Il n y a pas de blanc « entre
# phrases » : elles sont enchainees par le modele a l interieur d un paragraphe,
# et c est precisement ce qui rend l ecoute continue.
BLANC_PARAGRAPHE = 0.85
BLANC_PARTIE = 1.40

# ---------------------------------------------------------------------------
# LE DOSAGE « PEDAGOGIQUE »
#
# C est le reglage qui separe « quelqu un lit » de « quelqu un explique ».
#
#   cfg_weight   plus BAS = plus lent, plus delibere. A 0,3 le meme paragraphe
#                dure 22,4 s contre 20,2 s par defaut : 11 % de plus, et ces
#                11 % sont des respirations, pas du ralenti.
#   exaggeration l intensite. Laissee au milieu : montee plus haut, elle
#                theatralise — ce qui, sur un cours, sonne faux autrement.
#   temperature  la variabilite d une phrase a l autre. C est elle qui evite
#                que quatre-vingt-six phrases sortent toutes sur le meme moule.
#
# Ces valeurs ont ete choisies en ecoutant quatre dosages du meme paragraphe,
# generes avec la meme graine pour que seuls les reglages varient.
# ---------------------------------------------------------------------------
EXAGERATION = 0.5
POIDS_GUIDAGE = 0.3

# 0,6 et non 0,8. C est ce reglage, et lui seul, qui a fait disparaitre les
# bruits parasites entendus tout au long des premieres versions.
#
# La temperature gouverne le hasard de l echantillonnage. Trop haute, le modele
# s ecarte de ce qu il sait faire et produit des sons qui n appartiennent a
# aucune voix — un grelot metallique, un souffle qui module. Ce n etait ni
# l ecretage, ni la longueur des segments, ni la reference : c etait le hasard.
#
# Trouve en comparant trois versions du meme passage, une variable a la fois.
# Deux hypotheses testees avant celle-la se sont revelees fausses, dont une qui
# avait deja ete « corrigee » dans le code : plafonner les segments a 250
# caracteres, ce qui multipliait le temps de calcul par cinq sans rien gagner.
# La correction est annulee.
TEMPERATURE = 0.6


def texte_prononce(fichier: Path):
    """Les paragraphes a lire, dans l ordre, avec le blanc qui les suit.

    On saute l en-tete « clef: valeur » et le bloc de consignes en italique :
    ce sont des indications pour l auteur, pas du texte a dire. Les titres de
    partie ne sont pas prononces non plus — ils marquent une respiration.
    """
    brut = fichier.read_text(encoding="utf-8")
    bornes = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n(.*)$", brut, re.S)
    if not bornes:
        sys.exit(f"{fichier.name} : en-tête absent ou mal formé")

    blocs = []
    for bloc in re.split(r"\r?\n\r?\n+", bornes.group(2).strip()):
        t = bloc.strip()
        if not t or t.startswith("*"):
            continue
        if t.startswith("#"):
            # Un titre : on ne le lit pas, on respire plus longuement.
            if blocs:
                blocs[-1] = (blocs[-1][0], BLANC_PARTIE)
            continue
        blocs.append((t, BLANC_PARAGRAPHE))
    return blocs


def phrases(paragraphe: str):
    """Decoupe en phrases, sur la ponctuation forte suivie d une majuscule.

    Le tiret cadratin est remplace par une virgule : lu tel quel, le modele en
    fait un blanc sec au milieu d une phrase. La virgule rend l incise, qui est
    ce que le tiret voulait dire.
    """
    t = re.sub(r"\s*—\s*", ", ", paragraphe)
    t = re.sub(r"\*\*(.+?)\*\*", r"\1", t)
    t = re.sub(r"\s+", " ", t).strip()
    morceaux = re.split(r"(?<=[.!?…])\s+(?=[A-ZÀ-ÞÉÈÊ«])", t)
    return [m.strip() for m in morceaux if m.strip()]


def adoucir(onde, sr, ms=15):
    """Fondu d entree et de sortie, pour que les raccords ne claquent pas.

    Le modele coupe net a la fin d un segment. Colles bout a bout, ces
    coupures produisent un clic — discret sur une phrase, insupportable
    repete vingt-huit fois.
    """
    import torch
    n = int(sr * ms / 1000)
    if onde.shape[-1] < 2 * n:
        return onde
    rampe = torch.linspace(0.0, 1.0, n, device=onde.device)
    sortie = onde.clone()
    sortie[..., :n] *= rampe
    sortie[..., -n:] *= rampe.flip(0)
    return sortie


def main():
    parseur = argparse.ArgumentParser()
    parseur.add_argument("sujets", nargs="*")
    parseur.add_argument("--tout", action="store_true")
    parseur.add_argument("--langue", default="fr",
                         help="langue des textes à lire (fr, en…)")
    parseur.add_argument("--reference", default=None)
    parseur.add_argument("--exageration", type=float, default=EXAGERATION,
                         help="intensité (0,5 par défaut)")
    parseur.add_argument("--guidage", type=float, default=POIDS_GUIDAGE,
                         help="plus bas = plus lent et plus délibéré (0,3 par défaut)")
    args = parseur.parse_args()

    reference = Path(args.reference) if args.reference else reference_de(args.langue)
    if not reference.exists():
        sys.exit(f"Voix de référence introuvable : {reference}\n"
                 f"Y déposer un extrait propre de 20 à 40 secondes, lu EN {args.langue.upper()}.")

    # Le francais est a la racine, les autres langues sous leur code — la meme
    # disposition que le site, ou « en/guides/ » double « guides/ ».
    #
    # Sans cette separation, « --langue en » aurait lu le texte FRANCAIS et
    # ecrase l audio francais par sa lecture a l anglaise : un piege silencieux
    # et destructeur, puisque les huit minutes generees la veille auraient
    # disparu sans un mot.
    source = EPISODES if args.langue == "fr" else EPISODES / args.langue
    sortie = SORTIE if args.langue == "fr" else SORTIE / args.langue

    cibles = args.sujets
    if args.tout or not cibles:
        cibles = sorted(f.stem for f in source.glob("*.md")) if source.exists() else []
    if not cibles:
        sys.exit(f"Aucun épisode dans {source.relative_to(RACINE)}.")

    import torch
    import soundfile
    from chatterbox.mtl_tts import ChatterboxMultilingualTTS

    appareil = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"appareil : {appareil}", flush=True)

    # Une graine fixe : deux executions sur le meme texte donnent le meme
    # resultat. Sans cela, regenerer un episode pour corriger une phrase
    # changerait aussi toutes les autres.
    torch.manual_seed(20260822)

    modele = ChatterboxMultilingualTTS.from_pretrained(device=appareil)
    sr = modele.sr

    sortie.mkdir(parents=True, exist_ok=True)

    for sujet in cibles:
        fichier = source / f"{sujet}.md"
        if not fichier.exists():
            print(f"  ✗ {sujet} : {fichier.relative_to(RACINE)} introuvable")
            continue

        cible = sortie / f"{sujet}.wav"
        blocs = texte_prononce(fichier)
        total = len(blocs)
        print(f"\n{sujet} : {total} paragraphes", flush=True)

        morceaux = []
        fait = 0
        debut = time.time()
        for paragraphe, blanc in blocs:
            # UN PARAGRAPHE D UN SEUL TENANT, et non phrase par phrase.
            #
            # Le premier jet decoupait a la phrase, pour eviter que la voix
            # derive sur huit minutes. Il evitait la derive et produisait pire :
            # chaque phrase repartait a zero, meme hauteur, meme attaque, avec
            # un blanc mecanique entre — on entendait le montage, et personne
            # ne tient neuf minutes la-dessus.
            #
            # Un paragraphe fait deux a cinq phrases : assez long pour que le
            # modele enchaine et fasse VARIER l intonation d une phrase a
            # l autre, assez court pour ne pas deriver. C est l unite de sens,
            # c est donc l unite de generation.
            texte = " ".join(phrases(paragraphe))
            onde = modele.generate(
                texte, language_id=args.langue, audio_prompt_path=str(reference),
                exaggeration=args.exageration, cfg_weight=args.guidage,
                temperature=TEMPERATURE)

            # Un fondu de 15 ms aux deux bouts : sans lui, la coupure nette du
            # modele laisse un clic audible a chaque raccord.
            morceaux.append(adoucir(onde, sr))
            morceaux.append(torch.zeros(1, int(sr * blanc)))

            fait += 1
            ecoule = time.time() - debut
            reste = ecoule / fait * (total - fait)
            print(f"  {fait}/{total} paragraphes · {ecoule/60:.0f} min écoulées,"
                  f" ~{reste/60:.0f} min restantes", flush=True)

        audio = torch.cat(morceaux, dim=-1)

        # MISE A L ECHELLE AVANT ECRITURE — sans elle, le fichier craque.
        #
        # Le modele rend des valeurs flottantes qui DEPASSENT 1,0 : mesure sur
        # cet episode, crete a +2,3 dBTP. soundfile ecrit du 16 bits entier :
        # tout ce qui depasse est rabote au maximum, et chaque rabotage est un
        # craquement. 171 echantillons ecretes sur sept minutes — assez peu pour
        # ne rien voir dans les chiffres de niveau, assez pour s entendre tout
        # au long de l ecoute.
        #
        # La masterisation qui suit ramenait bien le niveau, mais la distorsion
        # etait deja gravee dans le fichier : baisser le volume d un son sature
        # ne le desature pas.
        #
        # On met donc TOUT l episode a l echelle d un seul coup, plutot que
        # segment par segment : un facteur global preserve les ecarts de niveau
        # entre paragraphes, la ou une normalisation par segment creerait des
        # sauts a chaque raccord.
        crete = audio.abs().max().item()
        if crete > 0.89:                      # 0,89 ≈ -1 dBFS
            audio = audio * (0.89 / crete)
            print(f"  crête à {20 * math.log10(crete):+.1f} dBFS, ramenée à -1 dBFS", flush=True)
        # soundfile plutot que torchaudio : depuis torch 2.9, torchaudio ecrit
        # via torchcodec, qui reclame les bibliotheques PARTAGEES de FFmpeg.
        # La notre est une version statique — torchcodec ne se charge donc pas,
        # et l ecriture echouait apres tout le calcul, au tout dernier geste.
        # librosa, qu utilise Chatterbox pour LIRE la reference, passe deja par
        # soundfile : on ne fait qu aligner l ecriture sur la lecture.
        soundfile.write(str(cible), audio.squeeze(0).cpu().numpy(), sr)
        # Division ENTIERE pour les minutes. Avec « :.0f », Python arrondit :
        # 409,48 s valent 6,82 minutes, affichees « 7 min 49 s » — soit une
        # minute de plus que la realite, sur un site ou une duree fausse est
        # precisement ce qu on s interdit.
        duree = audio.shape[-1] / sr
        print(f"  ✓ {cible.name} — {int(duree // 60)} min {int(duree % 60):02d} s"
              f" en {(time.time()-debut)/60:.1f} min de calcul", flush=True)

    print("\nEnsuite :  node scripts/preparer-audio.js")
    print("Puis    :  node scripts/publier-podcasts.js")


if __name__ == "__main__":
    main()
