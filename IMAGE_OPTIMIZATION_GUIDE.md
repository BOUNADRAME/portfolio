# 🖼️ Guide d'Optimisation des Images

## ✅ État Actuel

### Photo de profil
- **Fichier** : `public/images/photo.jpeg`
- **Taille** : 19KB
- **Statut** : ✅ **OPTIMALE** (déjà très bien compressée)

---

## 🎯 Objectifs d'optimisation

### Tailles recommandées :
- **Photos de profil** : < 100KB
- **Screenshots projets** : < 500KB chacun
- **Logos/Icons** : < 50KB
- **Background images** : < 200KB

### Formats recommandés :
1. **WebP** (meilleur) - 30% plus léger que JPEG
2. **JPEG** (bon) - Pour photos
3. **PNG** (si transparence nécessaire)
4. **SVG** (pour logos/icônes)

---

## 🛠️ Outils d'Optimisation (Gratuits)

### 1. Squoosh (Recommandé) ⭐
**URL** : https://squoosh.app/

**Avantages** :
- Interface simple
- Conversion WebP
- Compression ajustable
- Comparaison avant/après

**Utilisation** :
1. Upload ton image
2. Choisis **WebP** ou **MozJPEG**
3. Ajuste Quality: 80-85%
4. Download l'image optimisée

---

### 2. TinyPNG
**URL** : https://tinypng.com/

**Avantages** :
- Compression automatique
- Batch processing (plusieurs images)
- API disponible

**Limite** : 20 images/jour (gratuit)

---

### 3. ImageOptim (Mac)
**URL** : https://imageoptim.com/

**Avantages** :
- App native Mac
- Drag & drop
- Compression lossless

---

## 📐 Dimensionnement

### Tailles optimales :

#### Photo de profil
```
Taille affichée : 320x320px (mobile) - 400x400px (desktop)
Image source recommandée : 800x800px
Format : JPEG ou WebP
Quality : 85%
```

#### Screenshots projets
```
Résolution : 1920x1080px (Full HD 16:9)
Format : WebP
Quality : 80%
Taille cible : < 500KB
```

#### Open Graph image (réseaux sociaux)
```
Résolution : 1200x630px
Format : JPEG ou WebP
Quality : 85%
Taille cible : < 300KB
```

---

## 🚀 Workflow Optimisation

### Pour une nouvelle image :

1. **Redimensionner** (si trop grande)
   ```
   # Avec ImageMagick (si installé)
   convert input.jpg -resize 1920x1080 output.jpg
   ```

2. **Optimiser avec Squoosh**
   - Upload sur https://squoosh.app/
   - Format : WebP
   - Quality : 80-85%
   - Download

3. **Vérifier la taille**
   ```bash
   ls -lh image.webp
   # Doit être < 500KB pour screenshots
   # Doit être < 100KB pour photos profil
   ```

4. **Placer dans le bon dossier**
   ```bash
   cp image.webp public/images/
   # ou
   cp screenshot.webp public/projects/[project-id]/
   ```

---

## 🔄 Conversion Batch (plusieurs images)

### Script rapide (si tu as ImageMagick installé) :

```bash
# Installer ImageMagick (si pas installé)
brew install imagemagick webp

# Convertir toutes les PNG/JPG en WebP
for file in *.{jpg,jpeg,png}; do
  cwebp -q 85 "$file" -o "${file%.*}.webp"
done
```

---

## 📊 Vérification Performance

### Lighthouse (Chrome DevTools)

1. Ouvre ton site dans Chrome
2. F12 → Onglet "Lighthouse"
3. Clique "Analyze page load"
4. Regarde la section "Performance"

**Cibles** :
- Performance : > 90
- LCP (Largest Contentful Paint) : < 2.5s
- FID (First Input Delay) : < 100ms

---

## ✅ Checklist Avant Deploy

- [ ] Photo de profil < 100KB ✅ (19KB - Parfait !)
- [ ] Screenshots < 500KB chacun
- [ ] Format WebP utilisé (si possible)
- [ ] Images responsive (srcset si multiple sizes)
- [ ] Lazy loading activé (déjà fait avec Next.js)

---

## 🎨 Prochaines Images à Ajouter

### Open Graph Image (pour réseaux sociaux)

Crée une image 1200x630px avec :
- Ton nom
- Titre (Architecte Full Stack)
- Logo/Photo
- Couleurs du portfolio

Place-la dans : `public/images/og-image.jpg`

Puis met à jour `src/app/layout.js` :
```javascript
images: [
  {
    url: '/portfolio/images/og-image.jpg',
    width: 1200,
    height: 630,
  },
],
```

---

## 📱 Images Responsive (Avancé)

Pour servir différentes tailles selon l'appareil :

```jsx
<Image
  src="/portfolio/images/photo.jpeg"
  alt="Bouna Dramé"
  width={800}
  height={800}
  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 400px"
  quality={85}
/>
```

---

## 🔗 Ressources

- **Squoosh** : https://squoosh.app/
- **TinyPNG** : https://tinypng.com/
- **ImageOptim** : https://imageoptim.com/
- **Can I Use WebP** : https://caniuse.com/webp (98% support)
- **Lighthouse** : Chrome DevTools

---

## ✅ Conclusion

**Ton image actuelle (19KB) est déjà excellente !**

Pour l'avenir, utilise :
1. **Squoosh.app** pour optimiser
2. **WebP** comme format
3. **80-85%** quality
4. **< 500KB** pour screenshots

**Performance = Meilleur SEO + Meilleure UX = Plus de visiteurs** 🚀
