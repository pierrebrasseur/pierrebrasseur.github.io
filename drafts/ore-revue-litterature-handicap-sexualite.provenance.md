# Provenance — histoire genrée du handicap et de la sexualité

- **Date :** 22 août 2026
- **Commanditaire :** article ORE « A Gendered History of Disability and Sexuality »
- **Sources consultées :** passe 1, 139 articles uniques (Scholar Gateway, 12 requêtes
  sémantiques, 8 axes) ; passe 2, 8 requêtes Scite (corpus multi-éditeurs) ; passe 3, une dernière requête Scite et deux requêtes Scholar Gateway sur les axes empire et violences, plus trois requêtes web francophones pour lire les textes
  reconstruits à partir de titres, combler les lacunes et régler les attributions ; plus une
  dizaine de requêtes web pour la littérature francophone et les sources officielles.
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

## Ce qui reste à faire pour consolider

1. Lire les textes intégraux depuis un accès institutionnel ULB, en priorité Rubin (2012),
   Greenwald et Van Cleve (2014), Blackie et Moncrieff (2022), Leng (2019).
2. Interroger Cairn, OpenEdition, Persée et theses.fr directement.
3. Vérifier les quatre séries de chiffres de stérilisation sur les rapports officiels.
4. Trouver la littérature monographique, qu'aucun des deux corpus ne restitue.
5. Le quota Scite gratuit est épuisé. Un accès complet permettrait de creuser les pistes des
   §3 bis et 3 ter.
6. Chercher systématiquement les monographies, angle mort commun aux deux corpus d'articles :
   les deux lacunes réfutées en passe 3 l'ont été par des livres.
7. Vérifier sur source primaire la loi française de 2001, la condition de stérilisation à
   l'admission en établissement signalée pour la France, la Belgique et la Hongrie, et l'alerte
   ONU de mars 2025.
