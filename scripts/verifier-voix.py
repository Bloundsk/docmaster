#!/usr/bin/env python
# ---------------------------------------------------------------------------
# CLICKED - NOTER UN ENREGISTREMENT DE VOIX AVANT DE CLONER
#
# Pourquoi ce script existe.
#
# Quatre versions du podcast ont ete rejetees a l ecoute, dont trois pour
# « des bruits bizarres » puis « du bruit de fond ». A chaque fois j ai corrige
# ailleurs : l ecretage, les coupures entre phrases, les sigles mal prononces.
# C etaient de vrais defauts, mais aucun n etait CELUI-LA.
#
# La mesure a fini par le dire. Meme modele, memes reglages, meme phrase :
#
#     voix par defaut du modele ....... HNR  4,1 dB
#     la meme, clonant la reference ... HNR  1,1 dB
#     NotebookLM (juge acceptable) .... HNR  5,3 dB
#
# Le modele sait produire une voix nette. Ce qui la degrade, c est la
# REFERENCE : le clonage reproduit fidelement les conditions d enregistrement,
# reverberation et souffle de micro compris. Ce n est pas du bruit ajoute
# par-dessus la voix — c est du bruit DANS la voix, et aucun debruitage ne l en
# sort. Verifie : afftdn fort ne fait passer le HNR que de 1,3 a 1,6 dB, en
# assombrissant le son au passage.
#
# D ou ce script. Trois secondes de mesure evitent quatre minutes de calcul
# suivies d une deception.
#
#   python scripts/verifier-voix.py mon-essai.m4a
#
# Il ne juge pas la voix de la personne. Il juge l ENREGISTREMENT : distance au
# micro, piece, traitement applique par l application.
# ---------------------------------------------------------------------------

import os
import subprocess
import sys
import tempfile

import numpy as np
import soundfile

for _flux in (sys.stdout, sys.stderr):
    try:
        _flux.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

# Seuils tires des mesures ci-dessus, pas d une intuition. En dessous de 1,5 dB
# on est au niveau des references deja rejetees ; a partir de 3 dB on approche
# ce que le modele produit tout seul.
HNR_BON = 3.0
HNR_PASSABLE = 1.5

DUREE_MINI = 20.0     # moins, et le clonage n a pas de quoi apprendre
DUREE_CONFORT = 40.0


def charger(chemin):
    """Tout passe par ffmpeg : m4a, mp3, wav, peu importe ce qu il envoie."""
    tmp = tempfile.mktemp(suffix=".wav")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", chemin,
                    "-ac", "1", "-ar", "24000", tmp], check=True)
    onde, sr = soundfile.read(tmp, dtype="float32")
    os.unlink(tmp)
    return onde, sr


def hnr_trame(trame, sr):
    """Rapport harmonique/bruit d une trame, par autocorrelation.

    Une voix est periodique : son autocorrelation a un pic marque a la periode
    fondamentale. Le bruit, lui, ne se ressemble pas d un instant a l autre.
    La hauteur du pic dit donc quelle part du signal est vraiment de la voix.
    """
    t = trame - trame.mean()
    if np.sqrt((t ** 2).mean()) < 1e-4:
        return None
    a = np.correlate(t, t, mode="full")[len(t) - 1:]
    if a[0] <= 0:
        return None
    a = a / a[0]
    lo, hi = int(sr / 350), int(sr / 70)          # 70-350 Hz : la voix humaine
    if hi >= len(a):
        return None
    pic = a[lo:hi].max()
    if pic <= 0.30:
        return None                                # trame non voisee
    pic = min(float(pic), 0.999)
    return 10 * np.log10(pic / (1 - pic))


def noter(chemin):
    onde, sr = charger(chemin)
    duree = len(onde) / sr
    f = int(sr * 0.04)
    trames = [hnr_trame(onde[i * f:(i + 1) * f], sr) for i in range(len(onde) // f)]
    voisees = np.array([v for v in trames if v is not None])

    if voisees.size < 50:
        print("  Trop peu de voix dans ce fichier pour en juger.")
        return 1

    hnr = float(np.median(voisees))
    pic = float(np.abs(onde).max())
    satures = int((np.abs(onde) >= 0.999).sum())

    seg = onde[:len(onde) // f * f].reshape(-1, f) * np.hanning(f)
    sp = (np.abs(np.fft.rfft(seg, axis=1)) ** 2).mean(axis=0)
    fq = np.fft.rfftfreq(f, 1 / sr)
    plafond = float(fq[np.searchsorted(np.cumsum(sp) / sp.sum(), 0.995)])

    print(f"  durée            {duree:6.1f} s")
    print(f"  netteté (HNR)    {hnr:6.2f} dB")
    print(f"  crête            {pic:6.3f}      {satures} échantillon(s) saturé(s)")
    print(f"  plafond spectral {plafond / 1000:6.1f} kHz")
    print()

    soucis = []
    if hnr < HNR_PASSABLE:
        soucis.append("La voix est trop mêlée de bruit pour être clonée proprement. "
                      "C'est le niveau des références déjà rejetées.")
    elif hnr < HNR_BON:
        soucis.append("Utilisable, mais le clone gardera une part du souffle.")
    if duree < DUREE_MINI:
        soucis.append(f"Trop court : il faut au moins {DUREE_MINI:.0f} s, "
                      f"{DUREE_CONFORT:.0f} s de préférence.")
    if satures > 0:
        soucis.append("Le signal sature : recule du micro ou baisse le gain. "
                      "Une saturation ne se répare pas après coup.")
    if plafond < 6000:
        soucis.append("Le son est étouffé (rien au-dessus de 6 kHz) : micro trop "
                      "loin, ou compression trop forte de l'application.")

    if hnr >= HNR_BON and not soucis:
        print("  VERDICT : bon. Cet enregistrement peut servir de référence.")
        return 0

    print("  VERDICT : à refaire." if hnr < HNR_PASSABLE else "  VERDICT : moyen.")
    for s in soucis:
        print(f"    · {s}")
    print()
    print("  Ce qui change le plus, dans l'ordre :")
    print("    1. La pièce. Une chambre avec lit, rideaux, canapé absorbe ;")
    print("       une cuisine ou un couloir renvoie. La réverbération est ce que")
    print("       le clonage transforme en bruit de fond.")
    print("    2. La distance. 15 à 20 cm du micro, légèrement de côté pour ne")
    print("       pas souffler dessus. Pas le micro du portable à un bras.")
    print("    3. Le traitement. Coupe toute « réduction de bruit » ou")
    print("       « amélioration vocale » de l'application : elle abîme les")
    print("       harmoniques, qui sont précisément ce qu'on veut garder.")
    return 1


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("usage : python scripts/verifier-voix.py <fichier audio>")
    codes = []
    for chemin in sys.argv[1:]:
        print(f"\n{os.path.basename(chemin)}")
        codes.append(noter(chemin))
    sys.exit(max(codes))
