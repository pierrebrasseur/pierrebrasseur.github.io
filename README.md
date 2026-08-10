# pierrebrasseur.github.io

Site académique de Pierre Brasseur. HTML statique, une feuille de style, aucune dépendance
externe, aucun générateur : GitHub Pages sert les fichiers tels quels.

```
index.html            Accueil — présentation, axes, publications récentes, contact
publications.html     Liste complète (filtrable côté client), DOI + HAL + PDF
recherche.html        Axes, enquêtes en cours, encadrement doctoral
enseignement.html     Portail des cours, approche pédagogique, encadrement
cours-soca-d400.html  Méthodes de recherche — 8 séances, biblio, supports PDF
cours-soca-d495.html  Théories du travail social
cours-soca-d498.html  Care au travail
cours-soca-d554.html  Mobilisations, genre et identités professionnelles
cours-handicap.html   Handicap, autonomie et travail social (HETS Genève)
communications.html   Colloques et séminaires, 2013–2026
cv.html               CV complet (imprimable en PDF)
assets/style.css      Toute la mise en forme
assets/cours/         Supports de cours en PDF (auteur : P. Brasseur)
.nojekyll             Désactive le traitement Jekyll côté GitHub
```

## Ce qui ne doit pas entrer dans `assets/cours/`

Le dossier `02_Enseignement/` du Drive contient surtout des **travaux d'étudiant·es**
(mémoires, devoirs, exports Moodle nominatifs). Seuls les supports dont Pierre Brasseur est
l'auteur ont vocation à être publiés ici.

## Mise en ligne

Dépôt `pierrebrasseur/pierrebrasseur.github.io`, branche `main` :

```bash
git init && git branch -M main
git add . && git commit -m "Nouveau site"
git remote add origin https://github.com/pierrebrasseur/pierrebrasseur.github.io.git
git push -u origin main
```

Puis dans *Settings → Pages* : source **Deploy from a branch**, branche `main`, dossier `/ (root)`.
Le site est en ligne à `https://pierrebrasseur.github.io` en une à deux minutes.

Pour un nom de domaine personnel : ajouter un fichier `CNAME` contenant le domaine, et
un enregistrement DNS `CNAME` pointant vers `pierrebrasseur.github.io`.

## Aperçu local

```bash
python3 -m http.server 8000
```

## Mise à jour des publications

Tout est écrit en clair dans `publications.html`. Chaque entrée est un `<li>` :

```html
<li><strong>Brasseur, P.</strong> <span class="yr">(2026).</span> Titre.
    <span class="venue">Revue</span>, 12(3), 1–20.
    <a class="src" href="https://doi.org/...">doi</a></li>
```

Penser à mettre à jour le compteur dans le `<h2>` de la section (`<span class="count">14</span>`)
et le chapeau en haut de page.

Les filtres fonctionnent par section : l'attribut `data-type` d'une `<section>`
(`ouvrage`, `article`, `chapitre`, `direction`, `recension`) la relie au bouton correspondant.

## Choix techniques

- Noir et blanc, mode sombre automatique via `prefers-color-scheme`.
- Polices système uniquement (pile serif Charter/Georgia) : pas de requête réseau, pas de
  dépendance à Google Fonts, aucun traceur.
- Le filtre des publications est en JavaScript progressif : sans JS, la liste complète
  s'affiche et la barre de filtres reste masquée.
- `cv.html` a une feuille d'impression : `Cmd/Ctrl + P` produit un PDF propre.
- Données structurées `schema.org/Person` sur l'accueil.
