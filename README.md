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
blog.html             Carnet — index des billets, filtrable par catégorie
blog/                 Un billet par fichier HTML, nommé AAAA-MM-JJ-slug.html
feed.xml              Flux RSS du carnet
cv.html               CV complet (imprimable en PDF)
assets/style.css      Toute la mise en forme
assets/portrait.jpg   Portrait de l'accueil (640×800, niveaux de gris)
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

GitHub Pages est **actif** depuis le 22 septembre 2026 (source : branche `main`, dossier
`/ (root)`). Un `git push` suffit désormais ; la reconstruction prend une à deux minutes.

Le dépôt doit rester **public** : sur un compte gratuit, GitHub Pages ne publie un site
`<login>.github.io` que depuis un dépôt public. Le repasser en privé met le site hors ligne.

Pour un nom de domaine personnel : ajouter un fichier `CNAME` contenant le domaine, et
un enregistrement DNS `CNAME` pointant vers `pierrebrasseur.github.io`.

## Aperçu local

```bash
python3 -m http.server 8000
```

## Ajouter un billet au carnet

Il n'y a pas de générateur : publier un billet, c'est toucher **trois fichiers**.

1. **Copier un billet existant** de `blog/` sous le nom `AAAA-MM-JJ-slug.html`, puis y changer
   le titre (`<h1>`, `<title>`, `og:title`), le chapeau, la date, la catégorie, le temps de
   lecture, le contenu et les mots-clés du pied de page. Penser au `<link rel="canonical">`.
2. **Ajouter l'entrée en tête de `blog.html`**, dans `<ol class="posts">` :

```html
<li data-cat="notes-de-lecture">
  <p class="post-meta"><time datetime="2026-10-14">14 octobre 2026</time> · <span class="cat">Notes de lecture</span> · 4&#8239;min</p>
  <h2 class="post-title"><a href="blog/2026-10-14-mon-billet.html">Titre du billet</a></h2>
  <p class="post-sum">Une ou deux phrases de résumé.</p>
</li>
```

   Mettre à jour le compteur du `<h2>` (`<span class="count">5</span>`). L'attribut `data-cat`
   doit correspondre au `data-filter` d'un bouton de la barre de filtres ; pour une catégorie
   neuve, ajouter aussi le bouton.
3. **Ajouter un `<item>` en tête de `feed.xml`** et remonter `<lastBuildDate>`. La date suit le
   format RFC 822 (`Thu, 14 Oct 2026 09:00:00 +0200`).

Enfin, si le billet mérite d'apparaître en page d'accueil, ajouter la même entrée sous
`<h2>Carnet</h2>` dans `index.html` (en `<h3 class="post-title">`) et retirer la plus ancienne
des trois.

**Typographie** : le site emploie l'espace fine insécable `&#8239;` avant `: ; ! ?` et à
l'intérieur des guillemets (`«&#8239;mot&#8239;»`). Les liens des billets vers la racine
du site sont relatifs au dossier : `../publications.html`.

Les billets dont le corps compte au moins trois `<h2>` portent un sommaire dépliant
(`<details class="toc">`) dont les liens pointent vers les `id` des titres.

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
