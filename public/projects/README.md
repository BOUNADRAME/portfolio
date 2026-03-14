# 📸 Screenshots des Projets

## 📁 Structure

Pour ajouter des screenshots à un projet :

```
public/projects/
  [project-id]/
    screenshot1.png
    screenshot2.png
    screenshot3.png
```

---

## 🎯 Projets configurés

### KATS (kairos-sensemaking)
**Emplacement** : `public/projects/kairos-sensemaking/`

**Screenshots suggérés** :
- `dashboard.png` - Vue d'ensemble du dashboard
- `map-gps.png` - Carte GPS avec observations
- `analytics.png` - Analyse IA et sentiment

### PISA
**Emplacement** : `public/projects/pisa/`

**Screenshots suggérés** :
- `dashboard.png` - Tableau de bord principal
- `activities.png` - Liste des activités
- `mobile.png` - Application mobile

---

## ⚙️ Configuration dans le code

Les screenshots sont définis dans `src/app/page.js` (ligne ~364) :

```javascript
const screenshots = {
  'kairos-sensemaking': [
    'dashboard.png',
    'map-gps.png',
    'analytics.png'
  ],
  'pisa': [
    'dashboard.png',
    'activities.png',
    'mobile.png'
  ]
};
```

---

## 🔒 Pour les projets confidentiels

### Méthode recommandée : Screenshots sanitisés

1. **Flouter les données** sensibles (noms, emails, chiffres réels)
2. **Garder visible** : UI, design, structure
3. **Ou utiliser** : Données fictives (Lorem Ipsum, John Doe, etc.)

### Outils gratuits :
- **Photopea** : https://www.photopea.com/ (Photoshop en ligne)
- **Squoosh** : https://squoosh.app/ (Optimisation images)
- **Placeholder** : https://via.placeholder.com/ (Images de test)

---

## 📐 Spécifications

### Format
- **Type** : PNG ou WebP
- **Résolution** : 1920x1080px (16:9)
- **Poids** : < 500KB par image (optimisé)

### Optimisation
```bash
# Avec squoosh.app :
# 1. Upload ton image
# 2. Choisis WebP
# 3. Quality: 80-85%
# 4. Download
```

---

## 🚀 Ajout rapide

### Étape 1 : Prépare tes images
- Nomme-les correctement (dashboard.png, map.png, etc.)
- Optimise-les (< 500KB)

### Étape 2 : Place-les dans le bon dossier
```bash
cp ton-screenshot.png public/projects/kairos-sensemaking/dashboard.png
```

### Étape 3 : Met à jour portfolio.js

Dans `src/data/portfolio.js`, assure-toi que :
```javascript
{
  id: "kairos-sensemaking",
  hasScreenshots: true,  // ← Mettre à true
  isConfidential: true,  // ← true si screenshots floutés
  // ...
}
```

### Étape 4 : Commit et push
```bash
git add public/projects/
git commit -m "Add sanitized screenshots for KATS/PISA"
git push
```

---

## ✅ Vérification

Une fois déployé, les screenshots apparaissent :
- Au bas de chaque projet (quand développé)
- Cliquables pour agrandir (lightbox)
- Seulement si `hasScreenshots: true` ET `!isConfidential`

Pour projets confidentiels, la notice "Projet Confidentiel" s'affiche à la place.

---

## 💡 Astuce

Si tu veux montrer des screenshots même pour projets confidentiels :

1. Crée des versions **très floutées**
2. Ou des **wireframes** au lieu de screenshots
3. Ou des **mockups** avec données fictives

**But** : Montrer l'UI/UX sans violer les NDAs.
