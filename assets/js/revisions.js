// ===================================
// CLICKED - LES RAPPELS DE REVISION
// ===================================
//
// Le site enseigne la repetition espacee dans « Apprendre a apprendre », puis
// n en faisait rien : une fois « J ai lu et compris » coche, le guide etait
// range dans une liste et plus personne ne le rouvrait. Or ce guide dit
// lui-meme que l essentiel de l oubli a lieu dans les deux premiers jours.
//
// Ce fichier tient l echeancier. Il ne PRODUIT pas la donnee : c est
// enhance.js qui note la date au moment ou la case est cochee (voir la
// section « Marquer comme lu »). Les deux fichiers partagent donc une clef,
// et un controle de audit-coherence.mjs verifie qu ils ecrivent la meme.
//
// L echelle vient du guide lui-meme : « ce qui tenait un jour tient ensuite
// trois jours, puis une semaine, puis trois ». Passe le dernier palier, le
// site se tait — un rappel qui ne s arrete jamais finit par etre ignore, et
// c est alors tous les rappels qu on ignore.

window.DocMasterRevisions = (function () {
    const CLEF = "docmaster-revision-";
    const ECHELLE = [1, 3, 7, 21];          // en jours, depuis la derniere revision
    const JOUR = 24 * 60 * 60 * 1000;

    // La clef doit valoir pour les deux langues et pour n importe quelle racine
    // de deploiement : « /docmaster/en/guides/ia/avance.html » et
    // « /guides/ia/avance.html » designent la meme lecon. C est le meme decoupage
    // que celui de « Mon espace », a dessein.
    function normaliser(chemin) {
        const m = String(chemin).match(/guides\/([^/]+)\/([^/.]+)\.html/);
        return m ? "guides/" + m[1] + "/" + m[2] + ".html" : null;
    }

    function lire(chemin) {
        const cle = normaliser(chemin);
        if (!cle) return null;
        try {
            const brut = localStorage.getItem(CLEF + cle);
            if (!brut) return null;
            const rec = JSON.parse(brut);
            // Un stockage abime ou une version future du site : on l ignore
            // plutot que de calculer une echeance a partir de « NaN ».
            if (typeof rec.le !== "number" || typeof rec.rang !== "number") return null;
            return rec;
        } catch (e) { return null; }
    }

    function ecrire(chemin, rec) {
        const cle = normaliser(chemin);
        if (!cle) return;
        try { localStorage.setItem(CLEF + cle, JSON.stringify(rec)); } catch (e) {}
    }

    function oublier(chemin) {
        const cle = normaliser(chemin);
        if (!cle) return;
        try { localStorage.removeItem(CLEF + cle); } catch (e) {}
    }

    // Etat d une lecon terminee : ou elle en est, et si son echeance est passee.
    // « rang » vaut le nombre de revisions deja faites ; au-dela du dernier
    // palier, la lecon est consideree comme acquise et ne revient plus.
    function etat(chemin, maintenant) {
        const rec = lire(chemin);
        if (!rec) return null;
        const now = maintenant || Date.now();
        if (rec.rang >= ECHELLE.length) return { rec, acquise: true, due: false, jours: 0 };
        const echeance = rec.le + ECHELLE[rec.rang] * JOUR;
        return {
            rec: rec,
            acquise: false,
            due: now >= echeance,
            // Positif : jours restants. Negatif : jours de retard.
            jours: Math.round((echeance - now) / JOUR),
            depuis: Math.floor((now - rec.le) / JOUR)
        };
    }

    // Appelee quand le visiteur declare avoir revu la lecon.
    function revue(chemin) {
        const rec = lire(chemin) || { le: Date.now(), rang: 0 };
        ecrire(chemin, { le: Date.now(), rang: rec.rang + 1 });
    }

    // Une lecon terminee avant l arrivee de ce dispositif n a pas de date : le
    // site ne l avait pas notee, il ne va pas l inventer. Le compte demarre
    // aujourd hui, et la page le dit au visiteur.
    function amorcer(chemin) {
        if (lire(chemin)) return false;
        ecrire(chemin, { le: Date.now(), rang: 0 });
        return true;
    }

    return { CLEF, ECHELLE, JOUR, normaliser, lire, ecrire, oublier, etat, revue, amorcer };
})();
