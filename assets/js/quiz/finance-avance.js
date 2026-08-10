// ===================================
// BANQUE DE QUESTIONS — FINANCE, NIVEAU AVANCÉ
// ===================================
// 6 questions par sous-section : 3 affichées, les 3 autres prennent le relais
// au bout de deux semaines. Les questions de synthèse sont distinctes de
// celles des sous-sections — aucune n'est reprise deux fois.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "ordre-de-retrait": [
            // Série 1
            {
                q: "Sur quoi porte l'imposition lors d'un retrait ?",
                options: [
                    "Sur la totalité du montant retiré",
                    "Sur la seule part de gains contenue dans le retrait",
                    "Sur le capital versé à l'origine"
                ],
                a: 1,
                explication: "Un retrait est réputé composé de capital — jamais imposé — et de gains. Un contrat contenant 20 % de gains ne déclenche l'impôt que sur un cinquième du montant."
            },
            {
                q: "Que devient l'abattement annuel d'une assurance-vie s'il n'est pas utilisé ?",
                options: [
                    "Il se cumule sur l'année suivante",
                    "Il est définitivement perdu",
                    "Il est converti en réduction d'impôt"
                ],
                a: 1,
                explication: "Il se renouvelle chaque année mais ne se reporte pas. Solder un contrat en une fois gaspille tous les abattements des années suivantes."
            },
            {
                q: "Pourquoi l'ordre de retrait modifie-t-il le montant net perçu ?",
                options: [
                    "Parce que chaque enveloppe a sa propre fiscalité de sortie",
                    "Parce que les banques appliquent des frais différents",
                    "Parce que le taux d'imposition change selon le jour du mois"
                ],
                a: 0,
                explication: "À capital et performance identiques, puiser dans une enveloppe plutôt qu'une autre change le prélèvement — parfois de plus de 1 200 € sur 20 000 € retirés."
            },
            // Série 2
            {
                q: "Quel est l'intérêt d'étaler un retrait sur deux années civiles ?",
                options: [
                    "Réduire les frais de courtage",
                    "Utiliser l'abattement annuel deux fois",
                    "Éviter les prélèvements sociaux"
                ],
                a: 1,
                explication: "Concentrer les gains sur une seule année fiscale fait dépasser l'abattement, et tout ce qui dépasse est imposé plein tarif."
            },
            {
                q: "Un retrait de PEA de plus de cinq ans est soumis à quoi ?",
                options: [
                    "À rien du tout",
                    "Aux prélèvements sociaux, mais pas à l'impôt sur le revenu",
                    "À l'impôt sur le revenu, mais pas aux prélèvements sociaux"
                ],
                a: 1,
                explication: "L'avantage porte sur l'impôt sur le revenu. Les 17,2 % de prélèvements sociaux restent dus dans tous les cas."
            },
            {
                q: "Quelle phase de l'investissement est la plus souvent négligée ?",
                options: [
                    "Le choix des supports",
                    "La sortie, c'est-à-dire la façon de retirer",
                    "L'ouverture du compte"
                ],
                a: 1,
                explication: "On réfléchit beaucoup à la façon de placer. C'est pourtant au retrait que la fiscalité se matérialise réellement."
            }
        ],

        // ---------------------------------------------------------------
        "obligations-et-taux": [
            // Série 1
            {
                q: "Que se passe-t-il pour une obligation déjà détenue quand les taux montent ?",
                options: [
                    "Son prix baisse",
                    "Son prix monte",
                    "Son prix ne bouge pas"
                ],
                a: 0,
                explication: "Un titre versant 1 % devient invendable au prix d'origine si de nouvelles émissions rapportent 3 %. Son prix baisse jusqu'à rendre son rendement comparable."
            },
            {
                q: "Que mesure la duration d'une obligation ?",
                options: [
                    "Le temps restant avant son remboursement",
                    "Sa sensibilité aux variations de taux",
                    "La solidité financière de l'emprunteur"
                ],
                a: 1,
                explication: "Règle d'approximation : une hausse des taux de 1 point fait baisser le prix d'environ 1 % par année de duration."
            },
            {
                q: "Taux +1 point : quelle baisse approximative pour une obligation de duration 10 ans ?",
                options: [
                    "Environ 1 %",
                    "Environ 10 %",
                    "Environ 100 %"
                ],
                a: 1,
                explication: "Contre environ 2 % seulement pour une duration de 2 ans. Un rapport de un à cinq entre deux placements pourtant « sans risque de défaut »."
            },
            // Série 2
            {
                q: "Sur quoi porte la sécurité d'une obligation d'État ?",
                options: [
                    "Sur la stabilité de son prix",
                    "Sur le risque de défaut de l'emprunteur",
                    "Sur les deux à la fois"
                ],
                a: 1,
                explication: "Un fonds d'obligations d'État à longue duration peut perdre plus de 15 % en une année sans qu'aucun État n'ait fait défaut."
            },
            {
                q: "Quelle différence entre une obligation en direct et un fonds obligataire ?",
                options: [
                    "Le fonds n'a pas d'échéance et renouvelle continuellement ses titres",
                    "Le fonds garantit le capital, pas l'obligation",
                    "Aucune, ce sont deux mots pour la même chose"
                ],
                a: 0,
                explication: "Une obligation détenue jusqu'à l'échéance rembourse son nominal : la baisse s'efface. Dans un fonds, elle est réelle et se compense sur une durée voisine de sa duration."
            },
            {
                q: "Où placer une somme dont on aura besoin dans deux ans ?",
                options: [
                    "Sur des obligations longues, plus rémunératrices",
                    "Sur des supports à duration courte ou sans risque de prix",
                    "Peu importe, les obligations sont sûres"
                ],
                a: 1,
                explication: "Un besoin proche ne supporte pas une baisse de prix qui mettrait dix ans à se résorber."
            }
        ],

        // ---------------------------------------------------------------
        "diversification-reelle": [
            // Série 1
            {
                q: "Qu'est-ce qui caractérise une vraie diversification ?",
                options: [
                    "Le nombre de lignes détenues",
                    "Le fait que les actifs ne baissent pas en même temps",
                    "La présence d'au moins dix fonds différents"
                ],
                a: 1,
                explication: "Vingt actions du même pays et du même secteur forment une seule position découpée en vingt morceaux."
            },
            {
                q: "Quel poids la France représente-t-elle dans la capitalisation boursière mondiale ?",
                options: [
                    "Environ 3 %",
                    "Environ 15 %",
                    "Environ 30 %"
                ],
                a: 0,
                explication: "Pourtant, les épargnants français détiennent typiquement plus de la moitié de leur poche actions en titres nationaux — une surexposition d'un facteur seize."
            },
            {
                q: "Que deviennent les corrélations pendant une crise ?",
                options: [
                    "Elles diminuent, la diversification protège mieux",
                    "Elles augmentent, les actifs baissent davantage ensemble",
                    "Elles restent stables"
                ],
                a: 1,
                explication: "Au moment précis où l'on compte sur la diversification, elle fonctionne moins bien. Elle atténue, elle ne protège pas."
            },
            // Série 2
            {
                q: "Qu'est-ce que le biais domestique ?",
                options: [
                    "La tendance à surpondérer les entreprises de son propre pays",
                    "Le fait d'investir depuis son domicile",
                    "Une taxe sur les placements étrangers"
                ],
                a: 0,
                explication: "L'épargnant concentre alors son patrimoine sur l'économie où se trouvent déjà son emploi et souvent son logement."
            },
            {
                q: "Un indice américain gagne 10 % en dollars. Que perçoit un investisseur en euros ?",
                options: [
                    "10 %, la devise n'a aucun effet",
                    "Cela dépend de l'évolution du dollar face à l'euro",
                    "Toujours moins de 10 %"
                ],
                a: 1,
                explication: "Si le dollar s'est déprécié d'autant, le gain en euros est nul. Sur quelques années, cet effet peut dominer le résultat."
            },
            {
                q: "Comment vérifier que des fonds ne se recouvrent pas ?",
                options: [
                    "En comparant leurs performances passées",
                    "En comparant leurs principales lignes",
                    "En vérifiant qu'ils ont des noms différents"
                ],
                a: 1,
                explication: "Un fonds « monde », un fonds « Amérique du Nord » et un fonds « technologie » contiennent souvent trois fois les mêmes grandes valeurs."
            }
        ],

        // ---------------------------------------------------------------
        "facteur-comportemental": [
            // Série 1
            {
                q: "Que constate-t-on en comparant la performance d'un fonds à celle de ses porteurs ?",
                options: [
                    "Les porteurs obtiennent en moyenne moins que le fonds",
                    "Les porteurs obtiennent en moyenne davantage",
                    "Les deux sont identiques par construction"
                ],
                a: 0,
                explication: "La performance publiée suppose d'être resté investi du début à la fin. Or les versements arrivent après les hausses et les retraits après les baisses."
            },
            {
                q: "Que devient un capital de 10 000 € si l'on manque les 20 meilleures séances, contre 60 000 € en restant investi ?",
                options: [
                    "Environ 50 000 €",
                    "Environ 18 000 €",
                    "Environ 5 000 €"
                ],
                a: 1,
                explication: "Une vingtaine de journées, sur des milliers, expliquent les deux tiers du résultat. Personne ne sait les identifier à l'avance."
            },
            {
                q: "Où se situent le plus souvent les meilleures séances de bourse ?",
                options: [
                    "En période calme et haussière",
                    "À proximité immédiate des pires, en pleine tourmente",
                    "Réparties uniformément dans l'année"
                ],
                a: 1,
                explication: "C'est pourquoi sortir pour « attendre que ça se calme » revient presque toujours à manquer le rebond."
            },
            // Série 2
            {
                q: "Comment se manifeste l'aversion à la perte ?",
                options: [
                    "La perte est ressentie environ deux fois plus fortement qu'un gain équivalent",
                    "On refuse tout placement risqué",
                    "On oublie rapidement ses pertes"
                ],
                a: 0,
                explication: "Cette asymétrie explique qu'une baisse de 20 % pousse à vendre alors qu'une hausse de 20 % ne pousse pas à acheter."
            },
            {
                q: "Quel remède le guide propose-t-il contre les décisions prises à chaud ?",
                options: [
                    "Faire davantage confiance à son intuition",
                    "Consigner par écrit, à froid, son allocation et la conduite prévue en cas de chute",
                    "Confier la gestion à un tiers"
                ],
                a: 1,
                explication: "Le remède n'est pas la force de caractère : un document rédigé à froid tient mieux qu'une résolution prise à chaud."
            },
            {
                q: "Pourquoi surestime-t-on sa capacité à supporter une forte baisse ?",
                options: [
                    "Parce que l'épreuve réelle s'accompagne d'un contexte anxiogène absent de l'exercice théorique",
                    "Parce que les baisses sont plus fortes que prévu",
                    "Parce que les statistiques sont trompeuses"
                ],
                a: 0,
                explication: "Titres alarmistes, entourage inquiet, parfois un emploi menacé : rien de tout cela n'existe quand on s'imagine la scène."
            }
        ]
    },

    // ===================================================================
    // Questions de synthèse — distinctes de celles des sous-sections
    // ===================================================================
    synthese: [
        // Série 1
        {
            q: "Quel point commun relient les mécanismes de ce niveau ?",
            options: [
                "Ils sont contre-intuitifs avant d'être expliqués",
                "Ils ne concernent que les gros patrimoines",
                "Ils dépendent tous de la conjoncture"
            ],
            a: 0,
            explication: "Obligation qui baisse quand les taux montent, portefeuille fourni qui ne diversifie rien, investisseur qui gagne moins que son fonds : chacun paraît absurde, puis évident."
        },
        {
            q: "Deux personnes détiennent le même portefeuille et retirent la même somme. Qu'est-ce qui peut faire diverger leur net perçu ?",
            options: [
                "L'enveloppe dans laquelle elles puisent et l'étalement du retrait",
                "Leur banque",
                "Rien, le net est identique"
            ],
            a: 0,
            explication: "L'ordre de retrait est un levier à part entière, et l'un des rares qui s'exerce sans prendre de risque supplémentaire."
        },
        {
            q: "Quelle information regarder avant d'ajouter un fonds obligataire ?",
            options: [
                "Sa performance de l'an dernier",
                "Sa duration",
                "Le nombre d'obligations qu'il détient"
            ],
            a: 1,
            explication: "Elle indique l'amplitude de la baisse à attendre si les taux montent — l'information la plus utile avant le rendement affiché."
        },
        // Série 2
        {
            q: "Un portefeuille contient vingt fonds. Que peut-on en déduire sur sa diversification ?",
            options: [
                "Qu'il est très diversifié",
                "Rien : tout dépend du recouvrement entre ces fonds",
                "Qu'il est trop coûteux"
            ],
            a: 1,
            explication: "Le nombre de lignes ne mesure rien. Seul compte ce qui baisse en même temps."
        },
        {
            q: "Quelle erreur coûte statistiquement le plus cher à un investisseur de long terme ?",
            options: [
                "Choisir un fonds légèrement plus cher",
                "Sortir du marché pendant une baisse",
                "Rééquilibrer trop souvent"
            ],
            a: 1,
            explication: "Manquer les meilleures séances coûte davantage qu'éviter les pires ne rapporte, et les deux se produisent au même moment."
        },
        {
            q: "Que faut-il retenir de l'écart entre performance d'un fonds et performance de ses porteurs ?",
            options: [
                "Que les fonds publient des chiffres faux",
                "Que les décisions prises entre-temps ont un coût mesurable",
                "Que les frais expliquent tout"
            ],
            a: 1,
            explication: "Cet écart ne vient ni du fonds ni des frais : il vient des dates auxquelles on est entré et sorti."
        }
    ]
};
