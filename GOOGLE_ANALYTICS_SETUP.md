# 📊 Configuration Google Analytics

## 🎯 Étape 1 : Créer un compte Google Analytics

1. **Aller sur Google Analytics**
   - Visite : https://analytics.google.com/
   - Clique sur "Commencer" ou "Start measuring"

2. **Créer un compte**
   - Nom du compte : `Portfolio Bouna Drame`
   - Pays : Sénégal
   - Accepte les conditions

3. **Configurer une propriété**
   - Nom de la propriété : `Portfolio Website`
   - Fuseau horaire : `(GMT+00:00) Afrique/Dakar`
   - Devise : `XOF (Franc CFA)`

4. **Détails de l'entreprise**
   - Secteur : `Technology`
   - Taille : `Small (1-10 employees)`
   - Utilisation : `Get insights on my users`, `Measure advertising ROI`

5. **Créer un flux de données Web**
   - Clique sur "Web"
   - URL du site web : `https://bounadrame.github.io`
   - Nom du flux : `Portfolio Production`
   - ✅ Activer "Enhanced measurement" (mesure améliorée)

6. **Récupérer l'ID de mesure**
   - Tu verras un ID au format : `G-XXXXXXXXXX`
   - **COPIE CET ID** 📋

---

## ⚙️ Étape 2 : Configurer le Portfolio

### Option A : Via GitHub Secrets (Recommandé pour production)

1. **Aller dans les paramètres GitHub**
   ```
   https://github.com/BOUNADRAME/portfolio/settings/secrets/actions
   ```

2. **Ajouter un nouveau secret**
   - Clique sur "New repository secret"
   - Name : `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Secret : `G-XXXXXXXXXX` (ton ID Google Analytics)
   - Clique sur "Add secret"

3. **Modifier le workflow GitHub Actions**
   - Le build doit utiliser ce secret (je vais le configurer après)

### Option B : Via fichier .env.local (Pour tests en local)

1. **Créer le fichier**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Éditer .env.local**
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   ⚠️ Remplace `G-XXXXXXXXXX` par ton vrai ID

3. **Tester en local**
   ```bash
   npm run dev
   ```
   Ouvre la console du navigateur → onglet "Network" → cherche "gtag" ou "analytics"

---

## 🔍 Étape 3 : Vérifier que ça fonctionne

### Test en temps réel :

1. **Dans Google Analytics**
   - Va dans `Reports` → `Realtime`
   - Ouvre ton site : https://bounadrame.github.io/portfolio
   - Tu devrais voir **1 utilisateur actif** dans les 30 secondes

2. **Vérifier les events trackés**
   - `page_view` - Pages visitées
   - `scroll` - Scroll de la page
   - `click` - Clics sur les liens
   - `file_download` - Téléchargement du CV

### Test avec les DevTools :

1. **Ouvre ton site**
2. **Console DevTools** (F12)
3. **Onglet Network** → filtre "gtag"
4. **Recharge la page** → tu devrais voir des requêtes vers `google-analytics.com`

---

## 📊 Métriques Importantes à Suivre

### 📈 Trafic
- **Users** - Visiteurs uniques
- **Sessions** - Nombre de visites
- **Page views** - Pages vues
- **Bounce rate** - Taux de rebond (< 40% = bon)
- **Average session duration** - Temps moyen (> 2min = bon)

### 🎯 Engagement
- **CV Downloads** - Téléchargements du CV
- **Contact clicks** - Clics sur "Me contacter"
- **Project views** - Ouverture des projets détaillés
- **Social clicks** - Clics GitHub/LinkedIn

### 🌍 Acquisition
- **Traffic sources** - D'où viennent les visiteurs ?
  - Direct (URL tapée)
  - Organic Search (Google)
  - Referral (LinkedIn, GitHub)
  - Social (Twitter, Facebook)

### 📱 Technology
- **Devices** - Desktop vs Mobile vs Tablet
- **Browsers** - Chrome, Safari, Firefox...
- **Countries** - Pays des visiteurs

---

## 🎨 Événements Personnalisés (Phase 2)

Pour tracker des actions spécifiques :

```javascript
// Exemple : Tracker l'ouverture d'un projet
gtag('event', 'project_view', {
  project_name: 'KATS',
  project_category: 'IA & Data Science'
});

// Exemple : Tracker le téléchargement du CV
gtag('event', 'cv_download', {
  file_name: 'CV_BOUNA_DRAME.pdf',
  source: 'hero_section'
});
```

Je peux ajouter ces events automatiquement si tu veux ! 🚀

---

## 📝 Checklist Complète

- [ ] Créer compte Google Analytics
- [ ] Récupérer l'ID de mesure (G-XXXXXXXXXX)
- [ ] Ajouter le secret GitHub `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Déployer le site (push to main)
- [ ] Vérifier dans Realtime que ça fonctionne
- [ ] Attendre 24-48h pour les premières données
- [ ] Configurer des alertes (trafic anormal, erreurs, etc.)

---

## 🆘 Problèmes fréquents

### ❌ "Je ne vois aucune donnée dans Realtime"
- Vérifie que l'ID est bien configuré (sans espace, bon format G-XXXXXXXXXX)
- Vérifie que le secret GitHub est bien nommé `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Vérifie dans la console du navigateur qu'il n'y a pas d'erreur
- Teste en navigation privée (certains bloqueurs de pub bloquent Analytics)

### ❌ "Les données mettent du temps à apparaître"
- Realtime = instantané (quelques secondes)
- Rapports standards = 24-48h de délai

### ❌ "Certaines visites ne sont pas comptées"
- Les bloqueurs de pub (AdBlock, uBlock) bloquent Google Analytics
- ~15-30% des visiteurs utilisent des bloqueurs
- C'est normal, ne t'inquiète pas

---

## 🔐 Confidentialité & RGPD

Google Analytics est **conforme RGPD** si configuré correctement :

- ✅ Anonymisation IP activée (par défaut avec gtag.js)
- ✅ Pas de cookies tiers invasifs
- ✅ Données hébergées par Google (conformité EU-US)

Tu peux ajouter une mention dans ton footer :
```
"Ce site utilise Google Analytics pour améliorer l'expérience utilisateur."
```

---

## 📞 Besoin d'aide ?

Si tu as des questions sur la configuration, demande-moi ! 🚀
