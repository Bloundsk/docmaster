#!/bin/sh
# ---------------------------------------------------------------------------
# CLICKED — SAUVEGARDE DU DEPOT DANS UN FICHIER UNIQUE
#
# Produit un « bundle » git : le depot entier, historique compris, dans un seul
# fichier qui se restaure par un simple git clone.
#
#   sh scripts/sauvegarder-depot.sh <dossier-de-destination>
#
# POURQUOI CE SCRIPT EST VERSIONNE ET LES HOOKS NE LE SONT PAS
#
# La logique et ses verifications meritent d etre relues et suivies dans
# l historique. Le CHEMIN de destination, lui, est propre a la machine : il
# reste dans .git/hooks/, qui n est pas versionne. Les hooks ne sont donc que
# trois lignes chacun.
#
# QUELS HOOKS L APPELLENT, ET POURQUOI TROIS
#
#   post-commit    apres chaque commit
#   post-rewrite   apres un rebase ou un « commit --amend »
#   post-merge     apres un « pull » qui fusionne
#
# Il n y en avait qu un, post-commit, et cela laissait un trou constate le
# 30 aout 2026 : la sauvegarde contenait le bon commit sous « HEAD » mais un
# « refs/heads/main » en retard de deux commits. Restauree par git clone, elle
# aurait rendu une branche fausse.
#
# La cause : « git pull --rebase » lance juste apres un commit. Le rebase
# rejoue le commit — ce qui declenche post-commit, en HEAD DETACHE, alors que
# main n a pas encore bouge — puis deplace main SANS declencher post-commit.
# La derniere sauvegarde ecrite etait donc celle du milieu du rebase.
#
# D ou les deux mesures : on ne sauvegarde pas en HEAD detache, et on
# sauvegarde a la fin d une reecriture.
# ---------------------------------------------------------------------------

DEST="$1"
if [ -z "$DEST" ]; then
    echo "[sauvegarde] usage : sh scripts/sauvegarder-depot.sh <dossier>" >&2
    exit 2
fi

FINAL="$DEST/docmaster-sauvegarde.bundle"
TMP="$DEST/.en-cours.bundle"

mkdir -p "$DEST" 2>/dev/null

# HEAD detache : un rebase, un bisect ou un checkout de commit est en cours.
# La photo prise maintenant montrerait des branches a leur ancienne position.
# On ne fait rien : post-rewrite repassera a la fin.
if ! git symbolic-ref -q HEAD >/dev/null 2>&1; then
    echo "[sauvegarde] ignoree : HEAD detache (rebase en cours)."
    exit 0
fi

# On ecrit d'abord dans un fichier temporaire. Si l'operation est interrompue,
# la sauvegarde precedente reste intacte plutot que d'etre laissee a moitie
# ecrite — une sauvegarde corrompue est pire que pas de sauvegarde du tout.
if ! git bundle create "$TMP" --all >/dev/null 2>&1; then
    echo "[sauvegarde] ECHEC : impossible de creer le bundle" >&2
    rm -f "$TMP"
    exit 0
fi

# Verification 1 : integrite interne du fichier
if ! git bundle verify "$TMP" >/dev/null 2>&1; then
    echo "[sauvegarde] ECHEC : bundle corrompu, ancienne sauvegarde conservee" >&2
    rm -f "$TMP"
    exit 0
fi

# Verification 2 : le dernier commit est-il vraiment dedans ?
# git bundle verify valide ce que le fichier contient, pas ce qu'il devrait
# contenir. Cette verification-la est celle qui aurait detecte le probleme
# rencontre le 8 aout 2026, ou une sauvegarde "valide" etait en fait tronquee.
HEAD_LOCAL=$(git rev-parse HEAD)
if ! git bundle list-heads "$TMP" 2>/dev/null | grep -q "^$HEAD_LOCAL"; then
    echo "[sauvegarde] ECHEC : le dernier commit n'est pas dans le bundle" >&2
    rm -f "$TMP"
    exit 0
fi

# Verification 3 : la BRANCHE COURANTE du bundle est-elle au bon commit ?
# Les deux precedentes ne regardent que HEAD. Une sauvegarde dont HEAD est bon
# mais dont la branche est en retard se restaure sans erreur et rend un depot
# faux — c est le defaut du 30 aout 2026. Hors HEAD detache, ces deux valeurs
# doivent coincider ; si elles divergent, quelque chose d inattendu se passe et
# mieux vaut garder l ancienne sauvegarde.
BRANCHE=$(git symbolic-ref --short HEAD)
REF_BUNDLE=$(git bundle list-heads "$TMP" 2>/dev/null \
             | awk -v r="refs/heads/$BRANCHE" '$2 == r { print $1 }')
if [ "$REF_BUNDLE" != "$HEAD_LOCAL" ]; then
    echo "[sauvegarde] ECHEC : dans le bundle, $BRANCHE pointe ailleurs que HEAD" >&2
    rm -f "$TMP"
    exit 0
fi

mv -f "$TMP" "$FINAL"

TAILLE=$(du -k "$FINAL" 2>/dev/null | cut -f1)
NB=$(git rev-list --count --all)
echo "[sauvegarde] a jour : $NB commits, ${TAILLE} Ko  ->  $FINAL"

exit 0
