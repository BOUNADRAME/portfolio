# 📸 Guide : Screenshots Sanitisés pour Projets Confidentiels

## 🎯 Objectif

Montrer ton travail sur KATS et PISA sans violer les accords de confidentialité.

---

## 🛠️ Méthode 1 : Placeholder Screenshots (Recommandé)

### Outil gratuit : Placeholders personnalisés

Utilise **Figma** (gratuit) ou **Canva** pour créer des mockups :

1. **Va sur** : https://www.figma.com/ (gratuit)
2. **Crée un compte** (si nécessaire)
3. **Crée un nouveau fichier** : 1920x1080px

### Templates à créer pour KATS :

#### Screenshot 1 : Dashboard
```
- Navbar en haut (logo KATS floué)
- Sidebar avec menu (icônes visibles, texte Lorem)
- Graphiques/Charts (données fictives)
- Tableau avec colonnes (headers visibles, données Lorem)
- Couleurs : Bleu/violet (selon ton code)
```

#### Screenshot 2 : Map GPS
```
- Carte OpenStreetMap ou Google Maps
- Marqueurs fictifs (points aléatoires)
- Sidebar avec stats (nombres Lorem)
- Filtres en haut
```

#### Screenshot 3 : Formulaire/Modal
```
- Form avec champs (labels visibles, placeholder text)
- Boutons d'action
- Design système visible
```

---

## 🛠️ Méthode 2 : Screenshots réels floutés

Si tu as des screenshots existants :

### Outils en ligne gratuits :

1. **Photopea** (Photoshop en ligne gratuit)
   - URL : https://www.photopea.com/
   - Ouvre ton screenshot
   - Utilise l'outil "Blur" (flou)
   - Floute les données sensibles (noms, chiffres, emails)
   - Garde visible : UI, couleurs, structure, boutons

2. **Pixlr** (éditeur photo gratuit)
   - URL : https://pixlr.com/
   - Même processus

### Zones à flouter :
- ✅ Noms de personnes
- ✅ Emails
- ✅ Numéros de téléphone
- ✅ Données statistiques réelles
- ✅ Logos clients (si confidentiels)

### Zones à GARDER :
- ✅ Structure de l'interface
- ✅ Navigation/Menu
- ✅ Couleurs et design
- ✅ Types de graphiques
- ✅ Layout général

---

## 🛠️ Méthode 3 : Screenshots avec données fictives (Meilleure)

### Si tu peux re-déployer localement :

1. **Clone le projet** en local (si possible)
2. **Modifie la base de données** avec des données fictives :
   ```
   Noms : John Doe, Jane Smith, etc.
   Emails : user1@example.com, user2@example.com
   Stats : Chiffres aléatoires
   ```
3. **Prends des screenshots** propres
4. **Uploade** dans `/public/projects/`

---

## 📁 Structure des fichiers

```
public/
  projects/
    kairos-sensemaking/
      dashboard-overview.png
      map-gps.png
      form-modal.png
    pisa/
      dashboard.png
      activities-list.png
      mobile-app.png
```

---

## 🎨 Spécifications techniques

### Format recommandé :
- **Format** : PNG ou WEBP
- **Résolution** : 1920x1080px (Full HD)
- **Poids** : < 500KB (optimisé)
- **Aspect ratio** : 16:9

### Optimisation :
- Utilise https://squoosh.app/ pour compresser
- Convertir en WebP si possible

---

## 🚀 Solution rapide (10 minutes)

### Je te propose de créer des placeholders avec cet outil :

**Placeholder.com avec overlay**

Pour KATS - Dashboard :
```
https://via.placeholder.com/1920x1080/1e293b/3b82f6?text=KATS+Dashboard+%7C+AI+Analytics+Platform
```

Pour PISA - Activities :
```
https://via.placeholder.com/1920x1080/1e293b/06b6d4?text=PISA+Activities+Management
```

---

## 📋 Checklist

- [ ] Créer 2-3 screenshots pour KATS
- [ ] Créer 2-3 screenshots pour PISA
- [ ] Vérifier qu'aucune donnée sensible n'est visible
- [ ] Optimiser les images (< 500KB chacune)
- [ ] Placer dans `/public/projects/[project-id]/`
- [ ] Mettre à jour `hasScreenshots: true` dans portfolio.js

---

## 🎯 Prochaine étape

Une fois les screenshots créés, on les ajoute au portfolio et on met à jour le code pour les afficher !

**Questions ?** Dis-moi quelle méthode tu préfères ! 🚀
