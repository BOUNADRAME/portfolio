# Portfolio — Bouna Dramé

Portfolio professionnel construit avec Next.js 14, Tailwind CSS et déployé sur GitHub Pages.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déploiement sur GitHub Pages

### Option 1 : Déploiement automatique avec GitHub Actions

1. Créer un repo GitHub nommé `bounafode.github.io` (pour avoir l'URL bounafode.github.io)
   - OU un repo nommé `portfolio` (URL : bounafode.github.io/portfolio)

2. Si le repo n'est PAS `bounafode.github.io`, décommenter la ligne `basePath` dans `next.config.js` :
   ```js
   basePath: '/portfolio',  // remplacer par le nom de votre repo
   ```

3. Pousser le code :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/bounafode/bounafode.github.io.git
   git push -u origin main
   ```

4. Créer le fichier `.github/workflows/deploy.yml` (déjà inclus dans le projet)

5. Aller dans Settings > Pages > Source : choisir "GitHub Actions"

### Option 2 : Déploiement manuel

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `out/`. Vous pouvez les héberger sur n'importe quel serveur statique.

## Personnalisation

### Ajouter des captures d'écran SEDAS

1. Placer vos images dans `public/images/`
2. Dans `src/data/portfolio.js`, le projet SEDAS a `hasScreenshots: true`
3. Modifier le composant Projects dans `src/app/page.js` pour afficher les images

### Modifier les données

Toutes les données du portfolio sont dans `src/data/portfolio.js` :
- `personalInfo` : Informations de contact
- `stats` : Chiffres clés
- `projects` : Projets détaillés
- `expertise` : Compétences techniques
- `experience` : Parcours professionnel

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Déploiement** : GitHub Pages (export statique)
- **Fonts** : Space Grotesk + DM Sans + JetBrains Mono
