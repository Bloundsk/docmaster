// ===================================
// CLICKED - LES MEDIAS DE LA VEILLE, PAR LANGUE
// ===================================
//
// Demande de Ludo, le 13 septembre 2026 : chaque langue du site correspond a un
// pays ou elle est parlee, et la veille ne cherche que dans les medias connus
// de ce pays — d abord les plus lus, puis les medias specialises et reconnus
// dans le domaine de chaque guide.
//
//   fr  France           en  Royaume-Uni           hu  Hongrie
//
// Avant, la veille prenait tout ce que Google News remontait. La page francaise
// a ainsi publie un portail vietnamien traduit automatiquement, des diffuseurs
// de communiques, un hebdomadaire local ; les pages anglaise et hongroise
// montraient les memes articles francais, faute de mieux.
//
// COMMENT LA LISTE A ETE FAITE
//
// Les generalistes suivent les classements d audience : ACPM (aout 2026) pour
// la France, Press Gazette pour le Royaume-Uni, les mesures Gemius et Ahrefs
// pour la Hongrie. Les tabloids en font partie — The Sun, Blikk — puisque la
// demande etait « les plus lus » ; les regles de titre les tiennent comme les
// autres.
//
// Chaque domaine a ensuite ete interroge dans Google News sur trente jours
// (13 septembre 2026). Ceux qui n y publient rien ont ete retires, quelle que
// soit leur notoriete : lci.fr, journaldesentreprises.com, ajbh.hu (le
// Defenseur des droits hongrois), computerworld.hu, managementtoday.co.uk.
// Le Defenseur des droits francais est garde : un seul article en trente jours,
// mais c est celui qu on veut.
//
// Ont ete ecartes EXPRES, bien que connus et presents : les sites qui vivent du
// comparatif ou du bon plan (moneysavingexpert.com, techradar.com,
// creativebloq.com, frandroid.com, bankmonitor.hu), et les sites d offres
// d emploi (cadremploi.fr). Le site promet « aucune publicite, aucun lien
// remunere » : un comparateur d affiliation n y a pas sa place, meme celebre.
//
// Deux autres retires apres le premier essai, le 13 septembre 2026 : sur seize
// articles retenus en francais, Welcome to the Jungle en donnait deux, et
// c etaient deux offres d emploi (« Infirmier(e) de sante au travail F/H -
// Framatome - CDI ») ; Boursorama donnait une fiche de fonds (« Performances et
// risques DNCA Etoile C »). Le media existe, mais ce que Google News en remonte
// n est pas de l information.
//
// Quatre de plus apres l essai anglais, pour la meme raison : The BMJ donnait
// deux offres d emploi (« Consultant in Occupational Medicine - London job »),
// Citizens Advice une autre (« HR Lead - Employment Law »), GOV.UK un registre
// administratif, Tes une fiche d exercices a vendre (« Grade 8 & Middle School
// Science »).
//
// SOUS-DOMAINES
//
// Un domaine vaut pour le site principal et son « www. », pas pour ses
// sous-domaines : « carnet.sudouest.fr » publie des avis de deces,
// « tvmag.lefigaro.fr » des programmes tele. Un sous-domaine utile entre sous
// son propre nom (investir.lesechos.fr, ng.24.hu).
//
// POUR MODIFIER
//
// Ajouter un media : son domaine et son nom dans « noms », puis le domaine
// dans « generalistes » ou sous un ou plusieurs guides. Un domaine cite sans
// nom fait echouer le chargement — une faute de frappe ne peut pas passer en
// silence. Retirer un media : l enlever des listes ; ses articles deja en ligne
// disparaissent a la publication suivante.

const LANGUES = {
    fr: {
        pays: "France",
        dossier: "",
        google: "hl=fr&gl=FR&ceid=FR:fr",
        noms: {
            // generalistes
            "ouest-france.fr": "Ouest-France", "francetvinfo.fr": "franceinfo", "lefigaro.fr": "Le Figaro",
            "lemonde.fr": "Le Monde", "bfmtv.com": "BFMTV", "actu.fr": "Actu.fr", "20minutes.fr": "20 Minutes",
            "leparisien.fr": "Le Parisien", "ladepeche.fr": "La Dépêche", "radiofrance.fr": "Radio France",
            "midilibre.fr": "Midi Libre", "sudouest.fr": "Sud Ouest", "ledauphine.com": "Le Dauphiné libéré",
            "letelegramme.fr": "Le Télégramme", "leprogres.fr": "Le Progrès", "nicematin.com": "Nice-Matin",
            "lavoixdunord.fr": "La Voix du Nord", "huffingtonpost.fr": "Le HuffPost", "liberation.fr": "Libération",
            "estrepublicain.fr": "L'Est Républicain", "rfi.fr": "RFI", "tf1info.fr": "TF1 Info",
            "lexpress.fr": "L'Express", "lepoint.fr": "Le Point", "nouvelobs.com": "Le Nouvel Obs",
            "la-croix.com": "La Croix", "france24.com": "France 24", "europe1.fr": "Europe 1", "rtl.fr": "RTL",
            "humanite.fr": "L'Humanité",
            // economie et finance
            "lesechos.fr": "Les Echos", "investir.lesechos.fr": "Investir", "latribune.fr": "La Tribune",
            "capital.fr": "Capital", "challenges.fr": "Challenges", "lerevenu.com": "Le Revenu",
            "lafinancepourtous.com": "La finance pour tous",
            "amf-france.org": "Autorité des marchés financiers", "banque-france.fr": "Banque de France",
            // entreprise
            "maddyness.com": "Maddyness", "journaldunet.com": "Journal du Net",
            "bpifrance-creation.fr": "Bpifrance Création", "usinenouvelle.com": "L'Usine Nouvelle",
            // numerique
            "numerama.com": "Numerama", "01net.com": "01net", "lemondeinformatique.fr": "Le Monde Informatique",
            "zdnet.fr": "ZDNET", "lemagit.fr": "LeMagIT", "clubic.com": "Clubic", "siecledigital.fr": "Siècle Digital",
            "usine-digitale.fr": "L'Usine Digitale", "next.ink": "Next", "actuia.com": "ActuIA",
            "blogdumoderateur.com": "Blog du Modérateur",
            // cybersecurite
            "cybermalveillance.gouv.fr": "Cybermalveillance.gouv.fr", "cyber.gouv.fr": "ANSSI",
            "cnil.fr": "CNIL", "zataz.com": "Zataz",
            // marketing
            "strategies.fr": "Stratégies", "cbnews.fr": "CB News", "e-marketing.fr": "E-marketing.fr",
            "lsa-conso.fr": "LSA", "influencia.net": "Influencia",
            // droit
            "service-public.fr": "Service Public", "defenseurdesdroits.fr": "Défenseur des droits",
            "dalloz-actualite.fr": "Dalloz Actualité", "village-justice.com": "Village de la Justice",
            "actu-juridique.fr": "Actu-Juridique", "quechoisir.org": "UFC-Que Choisir",
            "60millions-mag.com": "60 Millions de consommateurs", "economie.gouv.fr": "economie.gouv.fr",
            // sante au travail
            "inrs.fr": "INRS", "santepubliquefrance.fr": "Santé publique France", "anact.fr": "Anact",
            "travail-emploi.gouv.fr": "Ministère du Travail", "ameli.fr": "Ameli", "anses.fr": "Anses",
            "lequotidiendumedecin.fr": "Le Quotidien du Médecin", "pourquoidocteur.fr": "Pourquoi Docteur",
            "actuel-rh.fr": "actuEL-RH",
            // ecologie
            "ademe.fr": "ADEME", "agirpourlatransition.ademe.fr": "ADEME", "arcep.fr": "Arcep",
            "reporterre.net": "Reporterre", "novethic.fr": "Novethic", "greenit.fr": "GreenIT.fr",
            "vert.eco": "Vert", "actu-environnement.com": "Actu-Environnement",
            // sciences et apprentissage
            "sciencesetavenir.fr": "Sciences et Avenir", "theconversation.com": "The Conversation",
            "letudiant.fr": "L'Etudiant", "cafepedagogique.net": "Le Café pédagogique",
            "cerveauetpsycho.fr": "Cerveau & Psycho", "pourlascience.fr": "Pour la Science",
            "psychologies.com": "Psychologies",
            // travail et management
            "hbrfrance.fr": "Harvard Business Review France", "courriercadres.com": "Courrier Cadres",
        },
        generalistes: [
            "ouest-france.fr", "francetvinfo.fr", "lefigaro.fr", "lemonde.fr", "bfmtv.com", "actu.fr",
            "20minutes.fr", "leparisien.fr", "ladepeche.fr", "radiofrance.fr", "midilibre.fr", "sudouest.fr",
            "ledauphine.com", "letelegramme.fr", "leprogres.fr", "nicematin.com", "lavoixdunord.fr",
            "huffingtonpost.fr", "liberation.fr", "estrepublicain.fr", "rfi.fr", "tf1info.fr", "lexpress.fr",
            "lepoint.fr", "nouvelobs.com", "la-croix.com", "france24.com", "europe1.fr", "rtl.fr", "humanite.fr",
        ],
        // BFMTV revient sous Finance et Entrepreneuriat : BFM Business publie
        // sur bfmtv.com, et Ludo l a cite en exemple.
        specialises: {
            finance: ["lesechos.fr", "investir.lesechos.fr", "bfmtv.com", "capital.fr", "challenges.fr", "latribune.fr",
                      "lerevenu.com", "lafinancepourtous.com", "amf-france.org", "banque-france.fr"],
            entrepreneuriat: ["lesechos.fr", "bfmtv.com", "maddyness.com", "journaldunet.com", "bpifrance-creation.fr",
                              "usinenouvelle.com", "challenges.fr", "capital.fr", "latribune.fr"],
            ia: ["numerama.com", "01net.com", "usine-digitale.fr", "lemondeinformatique.fr", "zdnet.fr", "next.ink",
                 "actuia.com", "siecledigital.fr", "clubic.com"],
            "dev-web": ["journaldunet.com", "lemondeinformatique.fr", "zdnet.fr", "next.ink", "blogdumoderateur.com",
                        "siecledigital.fr", "numerama.com", "01net.com"],
            data: ["journaldunet.com", "lemagit.fr", "lemondeinformatique.fr", "usine-digitale.fr", "zdnet.fr",
                   "cnil.fr", "siecledigital.fr"],
            cybersecurite: ["cybermalveillance.gouv.fr", "cyber.gouv.fr", "cnil.fr", "zataz.com", "lemagit.fr",
                            "zdnet.fr", "numerama.com", "01net.com", "next.ink", "clubic.com"],
            marketing: ["strategies.fr", "cbnews.fr", "e-marketing.fr", "lsa-conso.fr", "influencia.net",
                        "blogdumoderateur.com", "journaldunet.com"],
            design: ["blogdumoderateur.com", "journaldunet.com", "siecledigital.fr", "strategies.fr", "numerama.com",
                     "next.ink"],
            droit: ["service-public.fr", "defenseurdesdroits.fr", "cnil.fr", "dalloz-actualite.fr", "village-justice.com",
                    "actu-juridique.fr", "quechoisir.org", "60millions-mag.com", "economie.gouv.fr"],
            sante: ["inrs.fr", "santepubliquefrance.fr", "anact.fr", "travail-emploi.gouv.fr", "ameli.fr", "anses.fr",
                    "lequotidiendumedecin.fr", "pourquoidocteur.fr", "actuel-rh.fr",
                    "sciencesetavenir.fr"],
            ecologie: ["ademe.fr", "agirpourlatransition.ademe.fr", "arcep.fr", "reporterre.net", "novethic.fr",
                       "greenit.fr", "vert.eco", "actu-environnement.com", "numerama.com"],
            apprendre: ["theconversation.com", "letudiant.fr", "cafepedagogique.net", "cerveauetpsycho.fr",
                        "pourlascience.fr", "sciencesetavenir.fr", "psychologies.com"],
            negociation: ["hbrfrance.fr", "courriercadres.com", "capital.fr",
                          "psychologies.com", "lesechos.fr", "cerveauetpsycho.fr"],
            productivite: ["hbrfrance.fr", "courriercadres.com", "actuel-rh.fr",
                           "blogdumoderateur.com", "lesechos.fr", "cerveauetpsycho.fr"],
        },
    },

    en: {
        pays: "Royaume-Uni",
        dossier: "en/",
        google: "hl=en-GB&gl=GB&ceid=GB:en",
        noms: {
            // generalistes
            "bbc.co.uk": "BBC", "bbc.com": "BBC", "theguardian.com": "The Guardian", "dailymail.co.uk": "Daily Mail",
            "thesun.co.uk": "The Sun", "thetimes.com": "The Times", "thetimes.co.uk": "The Times",
            "telegraph.co.uk": "The Telegraph", "independent.co.uk": "The Independent", "mirror.co.uk": "Mirror",
            "standard.co.uk": "Evening Standard", "news.sky.com": "Sky News", "metro.co.uk": "Metro",
            "inews.co.uk": "The i Paper", "express.co.uk": "Daily Express", "itv.com": "ITV News",
            "channel4.com": "Channel 4 News", "theweek.com": "The Week",
            "manchestereveningnews.co.uk": "Manchester Evening News", "walesonline.co.uk": "Wales Online",
            "heraldscotland.com": "The Herald", "scotsman.com": "The Scotsman",
            // economie et finance
            "ft.com": "Financial Times", "economist.com": "The Economist", "thisismoney.co.uk": "This is Money",
            "moneyweek.com": "MoneyWeek", "investorschronicle.co.uk": "Investors' Chronicle",
            "ftadviser.com": "FT Adviser", "cityam.com": "City AM", "bankofengland.co.uk": "Bank of England",
            "fca.org.uk": "Financial Conduct Authority",
            // entreprise
            "sifted.eu": "Sifted", "uktech.news": "UKTN", "startups.co.uk": "Startups.co.uk",
            "smallbusiness.co.uk": "Small Business UK", "realbusiness.co.uk": "Real Business",
            "fsb.org.uk": "Federation of Small Businesses",
            // numerique et cybersecurite
            "theregister.com": "The Register", "computerweekly.com": "Computer Weekly", "wired.com": "WIRED",
            "newscientist.com": "New Scientist", "itpro.com": "IT Pro", "ncsc.gov.uk": "National Cyber Security Centre",
            "infosecurity-magazine.com": "Infosecurity Magazine", "ico.org.uk": "Information Commissioner's Office",
            // marketing et design
            "campaignlive.co.uk": "Campaign", "marketingweek.com": "Marketing Week", "thedrum.com": "The Drum",
            "asa.org.uk": "Advertising Standards Authority", "designweek.co.uk": "Design Week",
            "creativereview.co.uk": "Creative Review", "dezeen.com": "Dezeen",
            // droit
            "lawgazette.co.uk": "Law Society Gazette", "legalfutures.co.uk": "Legal Futures",
            "which.co.uk": "Which?",
            // sante et travail
            "hse.gov.uk": "Health and Safety Executive", "personneltoday.com": "Personnel Today",
            "peoplemanagement.co.uk": "People Management", "cipd.org": "CIPD", "hrmagazine.co.uk": "HR Magazine",
            "hbr.org": "Harvard Business Review",
            // ecologie
            "businessgreen.com": "BusinessGreen", "carbonbrief.org": "Carbon Brief", "edie.net": "edie",
            // apprentissage
            "timeshighereducation.com": "Times Higher Education",
            "theconversation.com": "The Conversation", "schoolsweek.co.uk": "Schools Week",
        },
        generalistes: [
            "bbc.co.uk", "bbc.com", "theguardian.com", "dailymail.co.uk", "thesun.co.uk", "thetimes.com",
            "thetimes.co.uk", "telegraph.co.uk", "independent.co.uk", "mirror.co.uk", "standard.co.uk",
            "news.sky.com", "metro.co.uk", "inews.co.uk", "express.co.uk", "itv.com", "channel4.com", "theweek.com",
            "manchestereveningnews.co.uk", "walesonline.co.uk", "heraldscotland.com", "scotsman.com",
        ],
        // Harvard Business Review est americaine. Elle reste sous Negociation et
        // Productivite : la presse britannique n a pas d equivalent qui publie
        // encore dans Google News (Management Today : deux articles en trente
        // jours).
        specialises: {
            finance: ["ft.com", "economist.com", "thisismoney.co.uk", "moneyweek.com", "investorschronicle.co.uk",
                      "ftadviser.com", "cityam.com", "bankofengland.co.uk", "fca.org.uk"],
            entrepreneuriat: ["ft.com", "sifted.eu", "uktech.news", "startups.co.uk", "smallbusiness.co.uk",
                              "realbusiness.co.uk", "cityam.com", "fsb.org.uk", "economist.com"],
            ia: ["theregister.com", "computerweekly.com", "wired.com", "newscientist.com", "itpro.com", "uktech.news",
                 "ft.com"],
            "dev-web": ["theregister.com", "computerweekly.com", "itpro.com", "wired.com"],
            data: ["computerweekly.com", "theregister.com", "itpro.com", "ico.org.uk", "newscientist.com"],
            cybersecurite: ["ncsc.gov.uk", "infosecurity-magazine.com", "theregister.com", "computerweekly.com",
                            "itpro.com", "ico.org.uk", "wired.com"],
            marketing: ["campaignlive.co.uk", "marketingweek.com", "thedrum.com", "asa.org.uk"],
            design: ["designweek.co.uk", "creativereview.co.uk", "dezeen.com", "thedrum.com", "wired.com"],
            droit: ["lawgazette.co.uk", "legalfutures.co.uk", "ico.org.uk", 
                    "which.co.uk"],
            sante: ["hse.gov.uk", "personneltoday.com", "peoplemanagement.co.uk", "cipd.org", "hrmagazine.co.uk",
                    "newscientist.com"],
            ecologie: ["businessgreen.com", "carbonbrief.org", "edie.net", "newscientist.com", "wired.com"],
            apprendre: ["timeshighereducation.com", "theconversation.com", "schoolsweek.co.uk",
                        "newscientist.com"],
            negociation: ["hbr.org", "peoplemanagement.co.uk", "personneltoday.com", "hrmagazine.co.uk", "ft.com",
                          "theconversation.com"],
            productivite: ["hbr.org", "peoplemanagement.co.uk", "personneltoday.com", "hrmagazine.co.uk", "wired.com",
                           "theconversation.com"],
        },
    },

    hu: {
        pays: "Hongrie",
        dossier: "hu/",
        google: "hl=hu&gl=HU&ceid=HU:hu",
        noms: {
            // generalistes, toutes tendances : la presse hongroise est tres
            // polarisee, et la liste suit l audience, pas une ligne politique
            "index.hu": "Index", "telex.hu": "Telex", "24.hu": "24.hu", "hvg.hu": "HVG", "444.hu": "444",
            "blikk.hu": "Blikk", "origo.hu": "Origo", "magyarnemzet.hu": "Magyar Nemzet", "nepszava.hu": "Népszava",
            "rtl.hu": "RTL", "mandiner.hu": "Mandiner", "hang.hu": "Magyar Hang", "infostart.hu": "Infostart",
            "atv.hu": "ATV", "borsonline.hu": "Bors", "168.hu": "168 Óra", "kisalfold.hu": "Kisalföld",
            "delmagyar.hu": "Délmagyarország", "metropol.hu": "Metropol",
            // economie et finance
            "portfolio.hu": "Portfolio", "vg.hu": "Világgazdaság", "economx.hu": "Economx",
            "privatbankar.hu": "Privátbankár", "penzcentrum.hu": "Pénzcentrum", "napi.hu": "Napi.hu",
            "mfor.hu": "Mfor", "mnb.hu": "Magyar Nemzeti Bank", "azenpenzem.hu": "Az én pénzem",
            // entreprise
            "forbes.hu": "Forbes Magyarország", "novekedes.hu": "Növekedés.hu", "piacesprofit.hu": "Piac & Profit",
            // numerique et cybersecurite
            "hwsw.hu": "HWSW", "bitport.hu": "Bitport", "raketa.hu": "Rakéta", "qubit.hu": "Qubit", "sg.hu": "SG.hu",
            "pcworld.hu": "PC World", "itbusiness.hu": "IT Business", "prohardver.hu": "Prohardver",
            "itcafe.hu": "IT café", "nki.gov.hu": "Nemzeti Kibervédelmi Intézet",
            "naih.hu": "Nemzeti Adatvédelmi és Információszabadság Hatóság",
            // marketing et design
            "kreativ.hu": "Kreatív", "media1.hu": "Media1", "mmonline.hu": "Marketing & Media",
            "marketinginfo.hu": "Marketinginfo",
            // droit
            "jogaszvilag.hu": "Jogászvilág", "jogiforum.hu": "Jogi Fórum", "arsboni.hu": "Arsboni",
            // sante et travail
            "hazipatika.com": "Házipatika", "webbeteg.hu": "WEBBeteg", "nnk.gov.hu": "Nemzeti Népegészségügyi Központ",
            "hrportal.hu": "HR Portál",
            // ecologie et apprentissage
            "greendex.hu": "Greendex", "ng.24.hu": "National Geographic Magyarország", "wwf.hu": "WWF Magyarország",
            "eduline.hu": "Eduline", "felvi.hu": "Felvi",
        },
        generalistes: [
            "index.hu", "telex.hu", "24.hu", "hvg.hu", "444.hu", "blikk.hu", "origo.hu", "magyarnemzet.hu",
            "nepszava.hu", "rtl.hu", "mandiner.hu", "hang.hu", "infostart.hu", "atv.hu", "borsonline.hu", "168.hu",
            "kisalfold.hu", "delmagyar.hu", "metropol.hu",
        ],
        specialises: {
            finance: ["portfolio.hu", "vg.hu", "economx.hu", "privatbankar.hu", "penzcentrum.hu", "napi.hu", "mfor.hu",
                      "mnb.hu", "azenpenzem.hu"],
            entrepreneuriat: ["forbes.hu", "novekedes.hu", "piacesprofit.hu", "portfolio.hu", "vg.hu", "economx.hu",
                              "bitport.hu"],
            ia: ["hwsw.hu", "bitport.hu", "raketa.hu", "qubit.hu", "sg.hu", "pcworld.hu", "itbusiness.hu",
                 "prohardver.hu"],
            "dev-web": ["hwsw.hu", "bitport.hu", "sg.hu", "prohardver.hu", "itcafe.hu", "itbusiness.hu", "pcworld.hu"],
            data: ["hwsw.hu", "bitport.hu", "itbusiness.hu", "naih.hu", "qubit.hu", "portfolio.hu"],
            cybersecurite: ["nki.gov.hu", "naih.hu", "hwsw.hu", "bitport.hu", "sg.hu", "pcworld.hu", "itcafe.hu",
                            "raketa.hu"],
            marketing: ["kreativ.hu", "media1.hu", "mmonline.hu", "marketinginfo.hu"],
            design: ["kreativ.hu", "mmonline.hu", "raketa.hu", "hwsw.hu"],
            droit: ["jogaszvilag.hu", "jogiforum.hu", "arsboni.hu", "naih.hu", "azenpenzem.hu", "hrportal.hu"],
            sante: ["hazipatika.com", "webbeteg.hu", "nnk.gov.hu", "hrportal.hu", "qubit.hu"],
            ecologie: ["greendex.hu", "qubit.hu", "raketa.hu", "ng.24.hu", "wwf.hu"],
            apprendre: ["eduline.hu", "felvi.hu", "qubit.hu", "raketa.hu", "ng.24.hu"],
            negociation: ["hrportal.hu", "forbes.hu", "piacesprofit.hu", "qubit.hu"],
            productivite: ["hrportal.hu", "forbes.hu", "piacesprofit.hu", "raketa.hu", "bitport.hu"],
        },
    },
};

// Un domaine cite sans nom est une faute de frappe : on refuse de charger.
for (const [code, l] of Object.entries(LANGUES)) {
    const cites = [...l.generalistes, ...Object.values(l.specialises).flat()];
    const orphelins = [...new Set(cites.filter((d) => !l.noms[d]))];
    if (orphelins.length) {
        throw new Error(`actualites-medias.js (${code}) : domaine(s) sans nom : ${orphelins.join(", ")}`);
    }
}

/* Tous les medias admis pour une langue, chacun une fois. Un media
   specialise d un guide est admis partout : c est la regle de pertinence, et
   non la liste, qui decide sous quelle section un article se range. */
function tousLesMedias(langue) {
    const l = LANGUES[langue];
    if (!l) return [];
    const domaines = new Set([...l.generalistes, ...Object.values(l.specialises).flat()]);
    return [...domaines].map((domaine) => ({ domaine, nom: l.noms[domaine] }));
}

module.exports = { LANGUES, tousLesMedias };
