// ===================================
// DOCMASTER - MESURE D'USAGE
// ===================================
//
// Le tableau de bord GoatCounter compte deja les pages vues : on sait donc
// quel guide est le plus consulte. Ce qu'il ne peut pas savoir, c'est ce qui
// se passe A L INTERIEUR d'un guide, puisque les sous-sections ne sont pas des
// pages mais des blocs depliables d'une meme page.
//
// Ce fichier comble ce trou en envoyant trois evenements :
//   section/<guide>/<ancre>  une sous-section a ete ouverte
//   favori/<guide>/<ancre>   une sous-section ou un guide a ete mis en favori
//   lu/<guide>               un guide a ete marque comme lu
//
// Ce qui est envoye : un nom d'evenement, rien d'autre. Pas d'identifiant, pas
// d'adresse, pas de cookie — GoatCounter n'en pose aucun, et c'est la raison
// pour laquelle il a ete choisi. Les mentions legales decrivent cette mesure.
//
// Rien n'est envoye depuis un fichier local (file://), comme pour le comptage
// des pages : seul le site en ligne est mesure.

(function () {
    if (!location.protocol.startsWith("http")) return;

    // --- Acheminement -----------------------------------------------------
    // count.js est charge en asynchrone : au moment ou le visiteur ouvre une
    // section, il peut ne pas etre encore la. Les evenements sont donc mis en
    // attente puis vides d'un coup. Sans cette file, les premieres secondes de
    // visite - les plus interessantes - seraient perdues.

    const file = [];
    let pret = false;

    function vider() {
        while (file.length) {
            const e = file.shift();
            try {
                window.goatcounter.count({ path: e.chemin, title: e.titre, event: true });
            } catch (err) {
                return;   // inutile d'insister si l'envoi echoue
            }
        }
    }

    function attendre(essaisRestants) {
        if (window.goatcounter && typeof window.goatcounter.count === "function") {
            pret = true;
            vider();
            return;
        }
        // ~10 s au total. Au-dela, count.js est bloque par un anti-pub ou
        // indisponible : on abandonne sans rien casser.
        if (essaisRestants > 0) setTimeout(() => attendre(essaisRestants - 1), 250);
    }

    // Un meme evenement n'est envoye qu'une fois par page affichee : replier et
    // deplier trois fois la meme section ne doit pas la faire paraitre trois
    // fois plus lue qu'elle ne l'est.
    const dejaVus = new Set();

    function mesurer(chemin, titre) {
        // GoatCounter refuse un nom d'evenement commencant par "/".
        chemin = String(chemin).replace(/^\/+/, "");
        if (!chemin || dejaVus.has(chemin)) return;
        dejaVus.add(chemin);

        file.push({ chemin: chemin, titre: titre || chemin });
        if (pret) vider();
    }

    // --- Identification du guide courant ----------------------------------
    // "…/guides/finance/index.html" donne "finance". Vide hors d'un guide.

    function guideCourant() {
        const m = location.pathname.match(/\/guides\/([^/]+)\//);
        return m ? m[1] : "";
    }

    // Pour les cartes de la page d'accueil, le guide se lit dans la cible du
    // lien plutot que dans l'adresse de la page.
    function guideDepuisChemin(chemin) {
        const m = String(chemin).match(/guides\/([^/]+)\//);
        return m ? m[1] : "";
    }

    // Ce fichier est injecte par layout.js, donc charge en asynchrone : il peut
    // tres bien arriver apres DOMContentLoaded. S'y abonner aveuglement
    // reviendrait a attendre un evenement deja passe, et rien ne serait mesure.
    function auChargement(fn) {
        if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
        else fn();
    }

    auChargement(() => {
        const guide = guideCourant();

        // --- 1. Ouverture d'une sous-section ------------------------------
        //
        // Deux gestes ouvrent toutes les sections d'un coup : le bouton « Tout
        // deplier », et l'impression. Les compter reviendrait a enregistrer un
        // interet pour chaque section alors que le visiteur n'en a designe
        // aucune — un seul clic ferait paraitre les cinq sections egalement
        // lues, et le classement ne voudrait plus rien dire.
        //
        // « toggle » est emis de façon asynchrone : le drapeau doit rester leve
        // un court instant apres le geste, le temps que les evenements arrivent.
        let enMasse = false;
        const ignorerUnInstant = () => {
            enMasse = true;
            setTimeout(() => { enMasse = false; }, 300);
        };

        const boutonDeplier = document.getElementById("tout-deplier");
        if (boutonDeplier) boutonDeplier.addEventListener("click", ignorerUnInstant, true);
        window.addEventListener("beforeprint", ignorerUnInstant);

        // L'evenement « toggle » ne remonte pas dans l'arbre : il faut ecouter
        // chaque bloc, un ecouteur sur le document ne verrait rien.
        document.querySelectorAll("details.lecon").forEach(bloc => {
            bloc.addEventListener("toggle", () => {
                if (!bloc.open || enMasse) return;
                const h3 = bloc.querySelector("summary h3");
                if (!h3 || !h3.id) return;
                mesurer("section/" + guide + "/" + h3.id,
                        "Section ouverte : " + h3.textContent.trim());
            });
        });

        // --- 2. Mise en favori --------------------------------------------
        // favoris.js arrete la propagation du clic pour que l'etoile ne replie
        // pas la section : un ecouteur sur le document ne serait jamais appele.
        // On observe donc l'attribut que le bouton met a jour lui-meme, ce qui
        // evite aussi de compter un favori que le stockage aurait refuse.
        // L'observation porte sur tout le document plutot que sur les boutons
        // existants : ceux-ci sont crees par favoris.js, dont rien ne garantit
        // qu'il se soit execute avant ce fichier. Ainsi l'ordre de chargement
        // des deux scripts n'a plus d'importance.
        if (window.MutationObserver) {
            new MutationObserver(changements => {
                changements.forEach(c => {
                    const btn = c.target;
                    if (!btn.classList || !btn.classList.contains("btn-favori")) return;
                    if (btn.getAttribute("aria-pressed") !== "true") return;   // retrait
                    const id = btn.dataset.id || "";
                    const g = guideDepuisChemin(id) || guide;
                    const ancre = id.includes("#") ? id.split("#")[1] : "guide";
                    mesurer("favori/" + g + "/" + ancre,
                            "Favori : " + (btn.getAttribute("aria-label") || "").replace(/^[^:]*:\s*/, ""));
                });
            }).observe(document.body, {
                subtree: true, attributes: true, attributeFilter: ["aria-pressed"]
            });
        }

        // --- 3. Guide marque comme lu -------------------------------------
        const case_lu = document.getElementById("mark-read-checkbox");
        if (case_lu) {
            case_lu.addEventListener("change", () => {
                if (!case_lu.checked) return;
                const titre = document.querySelector("header h1");
                mesurer("lu/" + guide, "Guide terminé : " + (titre ? titre.textContent.trim() : guide));
            });
        }

        attendre(40);
    });
})();
