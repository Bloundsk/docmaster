#!/usr/bin/env node
/* ---------------------------------------------------------------------------
 * Met a l epreuve la recherche du site, hors navigateur.
 *
 * Trois mecanismes s y superposent, et chacun a deja produit un defaut :
 *   - le repliage des accents, qui doit PRESERVER la longueur pour que les
 *     positions de surlignage restent valables sur le texte accentue ;
 *   - la tolerance aux fautes de frappe ;
 *   - le classement des resultats, qui n existait pas : les correspondances
 *     sortaient dans l ordre du fichier de donnees, et la tolerance aux fautes
 *     passait devant une saisie correcte.
 * ------------------------------------------------------------------------- */

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const RACINE = path.join(path.dirname(new URL(import.meta.url).pathname.slice(1)), "..");

// --- Les fonctions de search.js, recopiees a l identique --------------------
// Elles vivent dans une fermeture liee au DOM : les extraire du fichier serait
// fragile. On les redefinit, et un controle plus bas verifie qu elles n ont pas
// diverge de l original.

const MARQUES_ACCENT = new RegExp("[" + String.fromCharCode(0x300) + "-" + String.fromCharCode(0x36f) + "]", "g");

function plier(texte) {
    let out = "";
    for (const c of texte) {
        const s = c.normalize("NFD").replace(MARQUES_ACCENT, "");
        out += s.length === c.length ? s : c;
    }
    return out.toLowerCase();
}

function distance(a, b) {
    const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        }
    }
    return dp[a.length][b.length];
}

function fuzzyIncludes(text, query) {
    text = plier(text);
    query = plier(query);
    if (text.includes(query)) return true;
    if (query.length < 5) return false;
    return text.split(/\s+/).some((mot) => distance(mot, query) <= 1);
}

const contient = (text, query) => plier(text).includes(plier(query));

function pertinence(item, query) {
    if (contient(item.title, query)) return 4;
    if (contient(item.keywords, query)) return 3;
    if (contient(item.description, query)) return 2;
    return 1;
}

function highlight(text, query) {
    const q = plier(query.trim());
    if (!q) return text;
    const base = plier(text);
    let out = "", i = 0, p;
    while ((p = base.indexOf(q, i)) !== -1) {
        out += text.slice(i, p) + "<mark>" + text.slice(p, p + q.length) + "</mark>";
        i = p + q.length;
    }
    return out + text.slice(i);
}

function chercher(index, requete) {
    return index
        .filter((e) => fuzzyIncludes(e.title, requete) || fuzzyIncludes(e.keywords, requete) || fuzzyIncludes(e.description, requete))
        .sort((a, b) => pertinence(b, requete) - pertinence(a, requete));
}

// --- L index reel -----------------------------------------------------------

const bac = { window: {} };
vm.createContext(bac);
vm.runInContext(
    fs.readFileSync(path.join(RACINE, "assets/js/search-data.js"), "utf8") + ";window.__i = searchIndex;",
    bac
);
const INDEX = bac.window.__i;

let echecs = 0;
const dit = (ok, quoi) => {
    console.log(`  ${ok ? "ok   " : "ECHEC"} ${quoi}`);
    if (!ok) echecs++;
};

// --- 1. Le repliage preserve la longueur ------------------------------------
console.log("=== 1. LONGUEUR PRESERVEE (le surlignage en depend) ===");
for (const t of ["Épargne", "coût", "où", "naïve", "ETF", "Cybersécurité", "œuvre"]) {
    dit(plier(t).length === t.length, `${t} → ${plier(t)}`);
}

// --- 2. Recherche sans accent -----------------------------------------------
console.log("\n=== 2. RECHERCHE SANS ACCENT ===");
for (const [texte, q, attendu] of [
    ["L'épargne", "epargne", true],
    ["Cybersécurité", "cybersecurite", true],
    ["Le coût des frais", "cout", true],
    ["Les ETF", "etf", true],
    ["L'épargne", "xyzzy", false],
]) {
    dit(fuzzyIncludes(texte, q) === attendu, `« ${q} » dans « ${texte} »`);
}

// --- 3. Le surlignage ne casse pas le texte ---------------------------------
console.log("\n=== 3. SURLIGNAGE (le mot doit rester accentue) ===");
for (const [texte, q] of [["L'épargne de précaution", "epargne"], ["Cybersécurité", "securite"]]) {
    const sansBalises = highlight(texte, q).replace(/<\/?mark>/g, "");
    dit(sansBalises === texte, `texte intact : ${sansBalises}`);
}
dit(highlight("Les ETF", "") === "Les ETF", "requête vide rend le texte intact");
dit(highlight("aaa", "zz") === "aaa", "requête absente rend le texte intact");

// --- 4. Classement ----------------------------------------------------------
// Ce controle est ne d un defaut reel : « mesore », mot-cle exact du guide
// Negociation, sortait DERRIERE deux pages ou la tolerance aux fautes l avait
// rapproche de « mesure ».
console.log("\n=== 4. CLASSEMENT DES RESULTATS ===");

const premier = (q) => (chercher(INDEX, q)[0] || {}).title;

for (const [requete, attendu] of [
    ["mesore", "guides/negociation/"],
    ["zopa", "guides/negociation/"],
    ["phishing", "guides/cybersecurite/"],
    ["epargne", "guides/finance/"],
]) {
    const r = chercher(INDEX, requete)[0];
    dit(r && r.url.startsWith(attendu), `« ${requete} » → ${r ? r.title : "rien"}`);
}

// Une correspondance exacte doit toujours preceder une correspondance approchee.
for (const requete of ["mesore", "phishing", "epargne", "ancrage", "duerp"]) {
    const resultats = chercher(INDEX, requete);
    if (resultats.length < 2) continue;
    const scores = resultats.map((e) => pertinence(e, requete));
    const trie = scores.every((s, i) => i === 0 || scores[i - 1] >= s);
    dit(trie, `« ${requete} » : pertinences décroissantes [${scores.join(", ")}]`);
}

// --- 5. La tolerance aux fautes fonctionne toujours -------------------------
console.log("\n=== 5. TOLERANCE AUX FAUTES ===");
for (const [faute, attendu] of [["phising", "phishing"], ["cybersecurit", "cyber"], ["financ", "financ"]]) {
    const r = chercher(INDEX, faute)[0];
    dit(!!r, `« ${faute} » trouve quelque chose : ${r ? r.title : "rien"}`);
}
dit(chercher(INDEX, "zzzz").length === 0, "une requête absurde ne trouve rien");

// --- 6. Les fonctions n ont pas diverge de search.js ------------------------
console.log("\n=== 6. ACCORD AVEC search.js ===");
const source = fs.readFileSync(path.join(RACINE, "assets/js/search.js"), "utf8");
for (const nom of ["function plier", "function fuzzyIncludes", "function pertinence", "const contient"]) {
    dit(source.includes(nom), `search.js contient encore ${nom}`);
}
dit(/\.sort\(\(a, b\) => pertinence\(b, query\) - pertinence\(a, query\)\)/.test(source),
    "search.js trie bien par pertinence");

console.log("\n" + (echecs === 0 ? "Tous les tests passent." : `${echecs} test(s) en échec.`));
process.exit(echecs === 0 ? 0 : 1);
