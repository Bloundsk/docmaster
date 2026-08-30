# ---------------------------------------------------------------------------
# Copie la sauvegarde DocMaster sur une cle USB, puis verifie la copie.
#
# La verification est le coeur du script. Une copie interrompue - cle retiree
# trop tot, espace insuffisant - produit un fichier de taille plausible et
# parfaitement illisible. Rien ne le signale au moment ou on le constate,
# c'est-a-dire le jour ou on en a besoin.
#
# Usage : clic droit sur le fichier -> "Executer avec PowerShell"
#         ou, en precisant la lettre :  .\copier-sur-cle.ps1 -Lettre E
# ---------------------------------------------------------------------------

param([string]$Lettre)

$ErrorActionPreference = "Stop"

# La sauvegarde est cherchee a deux endroits, pour que le meme fichier serve
# depuis le dossier de sauvegardes (double-clic) comme depuis le depot, ou il
# est versionne. Sans quoi il faudrait deux copies du script, qui divergeraient.
$Parent      = Split-Path $PSScriptRoot -Parent            # ...\DocMaster
$GrandParent = Split-Path $Parent -Parent                  # ...\Desktop
$Emplacements = @(
    $PSScriptRoot,                                          # a cote du script
    (Join-Path $Parent      "Sauvegardes-DocMaster"),
    (Join-Path $GrandParent "Sauvegardes-DocMaster")        # depuis scripts\ du depot
)

$Source = $null
foreach ($e in $Emplacements) {
    $candidat = Join-Path $e "docmaster-sauvegarde.bundle"
    if (Test-Path $candidat) { $Source = $candidat; break }
}
if (-not $Source) { $Source = Join-Path $PSScriptRoot "docmaster-sauvegarde.bundle" }

$Lisez = Join-Path (Split-Path $Source -Parent) "LISEZ-MOI.md"

function Titre($t) { Write-Host ""; Write-Host $t -ForegroundColor Cyan }

# Le script est prevu pour un double-clic : sans pause, la fenetre se referme
# avant qu'on ait pu lire quoi que ce soit. Mais lance depuis un terminal ou
# par un outil, l'invite n'a personne pour y repondre et le script reste
# bloque. On ne demande donc que si quelqu'un peut repondre.
function Attendre {
    if (-not [Console]::IsInputRedirected) {
        Read-Host "`nAppuie sur Entree pour fermer" | Out-Null
    }
}

Titre "1. Sauvegarde a copier"

if (-not (Test-Path $Source)) {
    Write-Host "   Introuvable : $Source" -ForegroundColor Red
    Write-Host "   Fais un commit dans le projet : la sauvegarde se regenere toute seule."
    Attendre; exit 1
}

$info = Get-Item $Source
Write-Host ("   {0:N0} Ko, modifiee le {1:dd/MM/yyyy a HH:mm}" -f ($info.Length / 1KB), $info.LastWriteTime)

# Verifie que la sauvegarde elle-meme est saine avant de la copier : recopier
# un fichier corrompu sur la cle donnerait deux exemplaires inutilisables.
$git = Get-Command git -ErrorAction SilentlyContinue
if ($git) {
    # Deux pieges se cumulaient ici, et le controle refusait exactement ce
    # qu'il devait laisser passer.
    #
    # 1. "git bundle verify" exige d'etre DANS un depot. Lance par double-clic
    #    depuis ce dossier, il n'y en a aucun : la commande echouait toujours.
    #    On lui en fournit donc un, vide et temporaire - ce qui a l'avantage de
    #    ne dependre ni de l'emplacement du script, ni de la presence du projet.
    #
    # 2. La commande ecrit son compte rendu sur la sortie d'erreur MEME quand
    #    tout va bien - "... is okay". PowerShell 5.1 transforme alors chaque
    #    ligne en erreur, et "$ErrorActionPreference = Stop" interrompait le
    #    script. On neutralise la preference le temps de l'appel, et on ne juge
    #    que sur le code de retour - la seule chose que git dise sans ambiguite.
    $ancienne = $ErrorActionPreference
    $ErrorActionPreference = "Continue"

    $bacASable = Join-Path $env:TEMP ("verif-bundle-" + [guid]::NewGuid().ToString().Substring(0, 8))
    & git init --quiet $bacASable 2>&1 | Out-Null
    & git -C $bacASable bundle verify $Source 2>&1 | Out-Null
    $code = $LASTEXITCODE
    Remove-Item $bacASable -Recurse -Force -ErrorAction SilentlyContinue

    $ErrorActionPreference = $ancienne

    if ($code -ne 0) {
        Write-Host "   ATTENTION : cette sauvegarde ne passe pas la verification git." -ForegroundColor Red
        Write-Host "   Copie annulee. Refais un commit dans le projet pour la regenerer."
        Attendre; exit 1
    }
    Write-Host "   Verifiee par git : historique complet" -ForegroundColor Green
}

Titre "2. Cle USB"

if ($Lettre) {
    $cible = ($Lettre.TrimEnd(":", "\") + ":\")
    if (-not (Test-Path $cible)) {
        Write-Host "   Lecteur $cible introuvable." -ForegroundColor Red
        Attendre; exit 1
    }
} else {
    # DriveType 2 = amovible. On ne devine que s'il n'y a aucune ambiguite.
    $cles = Get-WmiObject Win32_LogicalDisk -Filter "DriveType=2" | Where-Object { $_.Size -gt 0 }

    if (-not $cles) {
        Write-Host "   Aucune cle USB detectee. Branche-la puis relance." -ForegroundColor Yellow
        Attendre; exit 1
    }
    if ($cles.Count -gt 1) {
        Write-Host "   Plusieurs supports amovibles :" -ForegroundColor Yellow
        $cles | ForEach-Object { Write-Host ("     {0}  {1}  ({2:N0} Go libres)" -f $_.DeviceID, $_.VolumeName, ($_.FreeSpace / 1GB)) }
        Write-Host "   Relance en precisant lequel :  .\copier-sur-cle.ps1 -Lettre E"
        Attendre; exit 1
    }
    $cible = $cles.DeviceID + "\"
    Write-Host ("   Detectee : {0}  {1}" -f $cles.DeviceID, $cles.VolumeName)
}

$dossier = Join-Path $cible "DocMaster-sauvegardes"
if (-not (Test-Path $dossier)) { New-Item -ItemType Directory -Path $dossier | Out-Null }

# Le nom porte la date : on garde ainsi plusieurs generations plutot que
# d'ecraser la seule copie existante. Si un probleme passe inapercu quelques
# jours, on peut encore remonter avant.
$nom = "docmaster-{0}.bundle" -f (Get-Date -Format "yyyy-MM-dd")
$destination = Join-Path $dossier $nom

Titre "3. Copie"
Write-Host "   -> $destination"
Copy-Item $Source $destination -Force
if (Test-Path $Lisez) { Copy-Item $Lisez (Join-Path $dossier "LISEZ-MOI.md") -Force }

Titre "4. Verification"
$aOrigine = (Get-FileHash $Source -Algorithm SHA256).Hash
$aCopie   = (Get-FileHash $destination -Algorithm SHA256).Hash

Write-Host "   origine : $($aOrigine.Substring(0,32))..."
Write-Host "   copie   : $($aCopie.Substring(0,32))..."

if ($aOrigine -ne $aCopie) {
    Write-Host "`n   ECHEC : la copie differe de l'original." -ForegroundColor Red
    Write-Host "   Ne compte pas sur cette copie. Reessaie sans retirer la cle pendant l'operation."
    Attendre; exit 1
}

Write-Host "`n   Copie conforme." -ForegroundColor Green

Titre "5. Fichiers hors depot"

# ---------------------------------------------------------------------------
# Le bundle sauvegarde le DEPOT. Deux dossiers en sont volontairement absents,
# et ils sont irremplacables :
#
#   podcasts/brut/   les .m4a produits par NotebookLM, un par parcours
#   podcasts/voix/   les enregistrements de la voix de l'auteur
#
# Ils sont ignores par git pour de bonnes raisons — la voix de l'auteur n'a
# rien a faire dans un depot public — mais cela les laissait sans aucune
# sauvegarde. Le disque perdu, il fallait tout refaire dans NotebookLM.
#
# La cle est un support personnel : ils y ont leur place. On les copie donc
# ici, verifies un par un.
#
# On ne SUPPRIME jamais sur la cle ce qui a disparu en local : on le signale.
# Une sauvegarde qui efface d'elle-meme n'est plus une sauvegarde.
# ---------------------------------------------------------------------------

$DossiersHorsDepot = @("podcasts/brut", "podcasts/voix")
$RacineProjet = $Parent
$CibleHorsDepot = Join-Path $dossier "fichiers-hors-depot"

$copies = 0; $identiques = 0; $echecs = 0; $orphelins = @()

foreach ($relatif in $DossiersHorsDepot) {
    $source = Join-Path $RacineProjet $relatif
    if (-not (Test-Path $source)) {
        Write-Host ("   {0} : absent ici, rien a copier" -f $relatif) -ForegroundColor Yellow
        continue
    }
    $cible = Join-Path $CibleHorsDepot (Split-Path $relatif -Leaf)
    if (-not (Test-Path $cible)) { New-Item -ItemType Directory -Path $cible -Force | Out-Null }

    foreach ($f in Get-ChildItem $source -File) {
        $dest = Join-Path $cible $f.Name
        $empreinteSource = (Get-FileHash $f.FullName -Algorithm SHA256).Hash

        # Deja la et identique : on ne recopie pas 3 Mo pour rien.
        if (Test-Path $dest) {
            if ((Get-FileHash $dest -Algorithm SHA256).Hash -eq $empreinteSource) {
                $identiques++
                continue
            }
        }
        Copy-Item $f.FullName $dest -Force
        if ((Get-FileHash $dest -Algorithm SHA256).Hash -eq $empreinteSource) {
            $copies++
        } else {
            Write-Host ("   ECHEC : {0} differe apres copie" -f $f.Name) -ForegroundColor Red
            $echecs++
        }
    }

    # Ce qui est sur la cle sans exister ici. Signale, jamais efface.
    foreach ($f in Get-ChildItem $cible -File) {
        if (-not (Test-Path (Join-Path $source $f.Name))) {
            $orphelins += (Join-Path (Split-Path $relatif -Leaf) $f.Name)
        }
    }
}

Write-Host ("   {0} copie(s), {1} deja identique(s)" -f $copies, $identiques)
if ($orphelins.Count -gt 0) {
    Write-Host "   Sur la cle mais plus ici (conserves) :" -ForegroundColor Yellow
    $orphelins | ForEach-Object { Write-Host ("     - {0}" -f $_) }
}
if ($echecs -gt 0) {
    Write-Host ("   {0} fichier(s) mal copie(s). Ne pas s'y fier." -f $echecs) -ForegroundColor Red
    Attendre; exit 1
}
if ((Test-Path $CibleHorsDepot)) {
    $poids = (Get-ChildItem $CibleHorsDepot -Recurse -File | Measure-Object -Property Length -Sum).Sum
    Write-Host ("   Total sur la cle : {0:N0} Ko" -f ($poids / 1KB)) -ForegroundColor Green
}

Titre "6. Copies presentes sur la cle"
Get-ChildItem $dossier -Filter "*.bundle" | Sort-Object LastWriteTime -Descending |
    ForEach-Object { Write-Host ("   {0}  ({1:N0} Ko)" -f $_.Name, ($_.Length / 1KB)) }

Write-Host ""
Write-Host "   Tu peux retirer la cle." -ForegroundColor Green
Attendre
