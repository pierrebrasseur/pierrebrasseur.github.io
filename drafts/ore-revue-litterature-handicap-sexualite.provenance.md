# Provenance — histoire genrée du handicap et de la sexualité

- **Date :** 22 août 2026
- **Commanditaire :** article ORE « A Gendered History of Disability and Sexuality »
- **Sources consultées**, en cinq passes :
  1. 139 articles uniques (Scholar Gateway, 12 requêtes sémantiques, 8 axes), plus une dizaine de
     requêtes web pour la littérature francophone et les sources officielles.
  2. 8 requêtes Scite (corpus multi-éditeurs), pour lire les textes dont l'argument avait été
     reconstruit à partir du titre, combler les lacunes et régler les attributions.
  3. Une dernière requête Scite et deux requêtes Scholar Gateway sur les axes empire et
     violences, plus trois requêtes web francophones.
  4. Recherche web consacrée aux monographies.
  5. Recherche web de vérification, les serveurs académiques n'étant plus joignables.
  6. Lecture du texte intégral de trois sources en accès ouvert, au moyen d'outils récupérant les
     pages côté serveur — ce que la politique réseau locale interdisait jusque-là.
- **Sources retenues :** 139 notices conservées dans le corpus brut
  (`ore-revue-litterature-handicap-sexualite.corpus.md`), dont une quarantaine discutées
  nommément dans la revue. Trois références francophones de premier plan : Giami (2016),
  Bouchet, Boudinet et Couraud (2025), Brasseur et Nayak (2018). Une source officielle
  primaire : rapport IGAS 1998 sur la stérilisation des personnes handicapées.
- **Sources rejetées :**
  - Monographies et presses universitaires : hors du corpus interrogé (Scholar Gateway indexe
    Wiley). Duke, Michigan, Minnesota, NYU, Chicago absentes.
  - Textes intégraux : inaccessibles. `oxfordre.com`, `academic.oup.com`, `link.springer.com`,
    `scimagojr.com`, `dl.icdst.org` bloqués par la politique réseau de l'environnement (tunnel
    CONNECT refusé, code 403). Vérifié en direct, ce n'est pas un défaut de configuration TLS.
  - Bases francophones (Cairn, OpenEdition, Persée, theses.fr) : atteintes seulement par
    recherche web, pas interrogées directement pour la même raison.
- **Vérification :** RÉUSSIE AVEC NOTES, renforcée par la passe 2. Deux points FATAL détectés et corrigés — des années de
  notice fausses (année de numérisation Wiley prise pour année de parution, six cas) et des
  lacunes affirmées sans contrôle, depuis vérifiées par script sur les 139 notices. Quatre points
  MAJEUR requalifiés et déclarés dans le livrable plutôt que masqués, dont les résumés
  reconstruits à partir de titres et le biais de catalogue du corpus.
- **Plan :** `outputs/.plans/handicap-sexualite-histoire-genre.md` (scratchpad de session)
- **Fichiers intermédiaires :**
  - `outputs/.drafts/handicap-sexualite-histoire-genre-biblio.json` (corpus structuré)
  - `outputs/.drafts/handicap-sexualite-histoire-genre-biblio.md` (liste brute)
  - `outputs/.drafts/handicap-sexualite-histoire-genre-verification.md` (passe adverse)
  - `extract.py` (déduplication et extraction des métadonnées)
- **Livrables versionnés :**
  - `drafts/ore-revue-litterature-handicap-sexualite.md`
  - `drafts/ore-revue-litterature-handicap-sexualite.corpus.md`

## Ce que la passe 2 a réglé

- Une erreur de fond corrigée : mon résumé de Johnson (2015) était un contresens.
- Deux erreurs factuelles : l'année de Johnson (2015 et non 2014) et la portée de Leng (2019),
  étude de cas allemande et non synthèse générale.
- L'attribution du dossier *Hastings Center Report* 29(5), 1999 : Erik Parens et Adrienne Asch,
  avec reprise en 2003 dans *MRDD Research Reviews* 9(1).
- Deux lacunes annulées comme artefacts de catalogue : surdité et intersexuation.
- Deux lacunes précisées au lieu d'être annulées : sida (présent en épidémiologie, absent en
  histoire) et vieillissement (présent en recherche de services, absent en histoire).
- Une quatrième série de chiffres de stérilisation, avec ventilation par sexe et par classe.

## Ce que la passe 3 a réglé

- **Lacune n° 1 réfutée.** Walmsley et Jarrett (dir.), *Intellectual Disability in the Twentieth
  Century* (Policy Press, 2019, accès ouvert) est l'histoire transnationale dont je niais
  l'existence. La formulation retenue est désormais plus étroite : cette historiographie traite
  les politiques et les institutions, pas la sexualité comme objet.
- **Lacune n° 3 réfutée.** Cleall, *Colonising Disability* (Cambridge, 2022) est la synthèse
  empire que je disais manquante. Son autrice figurait déjà dans le corpus de la passe 1, par un
  article. Un corpus d'articles fait disparaître les monographies même de ses propres auteurs.
- **Une archive identifiée** : les commissions d'enquête publiques sur les violences en
  institution (Nouvelle-Zélande, Australie, Irlande), répercutée dans la rubrique *Primary
  Sources* du plan de l'article.
- **Une pièce d'archive nommée** : le *Committee of Inquiry into Mental Defectives and Sexual
  Offenders* néo-zélandais de 1925.
- Dossier francophone sur la stérilisation étoffé : Giami et Lavigne (1993), *Stériliser le
  handicap mental*, et la loi de 2001 sur la stérilisation des personnes sous tutelle.

## Ce que la passe 4 a réglé

Passe consacrée aux monographies, puisque les trois réfutations de la passe 3 venaient de livres.

- Socle de monographies constitué (§3 quater), avec ce que chaque titre apporte : Rembis,
  Kim, Kulick et Rydström, Cleall, Walmsley et Jarrett, Kline, Schalk.
- Deux ouvrages collectifs en accès ouvert portant sur handicap **et** sexualité hors Occident :
  *Disability, Sexuality, and Gender in Asia* (Routledge, 2024) et *Physical Disability and
  Sexuality: Stories from South Africa* (Palgrave, 2021).
- L'opposition Danemark / Suède de Kulick et Rydström enfin sourcée dans son détail, et
  répercutée dans le plan de l'article.
- Shakespeare et Richardson (2018), bilan à vingt ans du livre fondateur de 1996, avec une
  formule citable.
- Le cas belge, absent du plan alors que l'article s'écrit depuis l'ULB : ASBL ADITI wb.
- Lacune n° 4 encore précisée : le lien sida / sexualité handicapée est fait par une seule
  équipe, sud-africaine (Rohleder et Swartz, présents en 2009 comme en 2021).

## Ce que la passe 6 a réglé

Première passe où des textes ont pu être lus intégralement plutôt que résumés.

- **Une ouverture d'article trouvée.** L'introduction de Cleall porte sur Tilly Aston
  (1873–1947), aveugle australienne, à la fois objet de la condescendance validiste et agent de
  la hiérarchie raciale. Meilleure ouverture que Carrie Buck : elle interdit le récit
  d'oppression simple, pose genre et race ensemble, et sort du cadre anglo-américain. Versée au
  plan comme premier choix.
- **Les réserves sur l'archive des commissions, précisées.** Stace écrit que la commission
  néo-zélandaise a recruté beaucoup de juristes et peu d'historiens, et que les dispositifs de
  recueil ont reconnu n'être ni dotés ni compétents pour entendre les survivants des *back
  wards*. L'archive sous-représente structurellement ceux qu'elle vise à réparer.
- **Excuses de Helen Clark (1999)**, visant explicitement l'argument de l'anachronisme.
- **Lacune n° 2 resserrée une seconde fois** : Shakespeare et Richardson établissent que le
  vieillissement apporte une plus grande acceptation de soi et rend la déficience moins
  saillante. Ce qui subsiste est l'absence d'une *histoire*, pas d'une littérature.
- **Une thèse matérielle** dégagée de la convergence de trois constats indépendants — Pro
  Infirmis 2003, ADITI depuis 2014, austérité britannique chez Shakespeare et Richardson : ce qui
  détermine l'autonomie sexuelle des personnes handicapées n'est ni le droit ni les mentalités,
  mais l'infrastructure matérielle qui la finance.

## Ce qui reste à faire pour consolider

1. Lire les textes intégraux depuis un accès institutionnel ULB, en priorité Rubin (2012),
   Greenwald et Van Cleve (2014), Blackie et Moncrieff (2022), Leng (2019).
2. Interroger Cairn, OpenEdition, Persée et theses.fr directement.
3. Vérifier les quatre séries de chiffres de stérilisation sur les rapports officiels.
4. Le quota Scite gratuit est épuisé. Un accès complet permettrait de creuser les pistes des
   §3 bis et 3 ter.
5. Lire les monographies du §3 quater. Aucune n'a pu être ouverte ici : `oapen.org`,
   `doabooks.org`, `books.openedition.org`, `hal.science`, `theses.fr` et
   `eprints.whiterose.ac.uk` sont tous bloqués par la politique réseau, y compris pour les
   titres en accès ouvert. Le socle repose sur des notices et des résumés d'éditeur.
6. Vérifier sur source primaire la seule affirmation encore non étayée : la stérilisation ou la
   contraception posée comme condition d'admission en établissement spécialisé en France, en
   Belgique et en Hongrie. Elle ne vient que d'un résumé de recherche.

## Ce que la passe 5 a réglé

Passe de vérification, menée par recherche web seule, les serveurs académiques s'étant
déconnectés.

- **Loi française de 2001 établie dans son détail**, et elle dit le contraire du récit courant :
  la loi n° 2001-588 du 4 juillet 2001 n'abolit pas la stérilisation des majeurs protégés, elle
  l'encadre par l'article L2123-2 du code de la santé publique — contre-indication médicale
  absolue, juge des tutelles, comité d'experts régional toujours renouvelé aujourd'hui. Sa
  garantie réelle est qu'un refus ne peut être outrepassé. Répercuté dans le plan de l'article.
- **ADITI documenté** : Aditi vzw côté flamand en 2009, aile francophone en janvier 2014, une
  vingtaine d'accompagnants dont trois quarts de femmes, subvention régionale d'environ 50 000
  euros par an, 100 euros l'heure. D'où un argument comparatif neuf, versé au plan : ce qui
  décide de la survie d'un dispositif d'assistance sexuelle est la structure de son financement,
  le don rendant l'association otage de l'économie de la pitié là où la subvention l'en
  affranchit. Pro Infirmis 2003 contre ADITI depuis 2014.
- **Alerte ONU confirmée et attribuée** : Heba Hagrass, rapporteuse spéciale sur les droits des
  personnes handicapées, rapport au Conseil des droits de l'homme, mars 2025.
