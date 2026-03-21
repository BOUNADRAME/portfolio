# 🎯 GUIDE COMPLET D'ENTRETIEN - Bouna Dramé

**Expert Recruteur - Préparation Niveau Senior**

---

## 📋 TABLE DES MATIÈRES

1. [Questions Techniques Incontournables](#1-questions-techniques-incontournables)
2. [Questions Comportementales (STAR)](#2-questions-comportementales-star)
3. [Questions Pièges & Comment les Déjouer](#3-questions-pièges--comment-les-déjouer)
4. [Vos Questions à LEUR Poser](#4-vos-questions-à-leur-poser)
5. [Négociation Salariale](#5-négociation-salariale)
6. [Simulations d'Entretiens par Type](#6-simulations-dentretiens-par-type)
7. [Checklist Finale](#7-checklist-finale-avant-lentretien)
8. [Votre Pitch Ultime](#8-résumé--votre-pitch-ultime-2-min)

---

# 1️⃣ QUESTIONS TECHNIQUES INCONTOURNABLES

## 🔥 SDMX 3.0 (Votre Super-Pouvoir)

### ❓ "Expliquez-moi SDMX 3.0 comme si j'avais 10 ans"

**Réponse PARFAITE :**
```
"SDMX, c'est comme un langage universel pour les statistiques.

Imaginez que chaque pays parle une langue différente pour ses
chiffres : la France dit 'PIB', le Sénégal dit 'GDP', etc.

SDMX 3.0, c'est le Google Translate des données statistiques.
Ça permet à la Banque Mondiale, au FMI et à Eurostat de lire
les données de TOUS les pays dans le MÊME format.

Sur SEDAS, j'ai implémenté ce standard pour que les chercheurs
du monde entier puissent accéder aux données sénégalaises
sans conversion manuelle. Résultat : gain de 270M FCFA."
```

**Pourquoi c'est parfait :**
- ✅ Analogie simple
- ✅ Chiffre concret
- ✅ Impact business

---

### ❓ "Quelle est la différence entre SDMX 2.1 et 3.0 ?"

**Réponse EXPERT :**
```
"SDMX 3.0 apporte 3 améliorations majeures :

1. JSON natif (vs XML uniquement en 2.1)
   → API REST plus rapides, meilleure DX

2. Support des métadonnées enrichies
   → Contexte et traçabilité améliorés

3. Compatibilité cloud-native
   → Scalabilité horizontale facilitée

Sur SEDAS, j'ai exploité le JSON pour réduire la taille
des payloads de 40% et améliorer les temps de réponse
de l'API de 60%."
```

**Ce qui impressionne :**
- ✅ Détails techniques précis
- ✅ Chiffres de performance
- ✅ Vision architecture

---

## 🏗️ ARCHITECTURE & DESIGN

### ❓ "Comment avez-vous géré la scalabilité sur PIGOR avec 15 000 agents ?"

**Réponse STAR (Situation, Task, Action, Result) :**
```
SITUATION :
"Le RGPH-5 devait coordonner 15 000 agents en simultané
pour recenser 18M d'habitants en 2 semaines."

TASK :
"Mon rôle : concevoir une architecture capable de traiter
des pics de 5 000 connexions concurrentes sans dégradation."

ACTION :
"J'ai implémenté une architecture 3-tiers :
- Load balancer NGINX pour distribution
- Pool de serveurs Symfony avec Redis cache
- SQL Server en cluster pour haute disponibilité
- Monitoring temps réel avec Prometheus"

RESULT :
"Résultat : 0 downtime pendant les 2 semaines,
temps de réponse < 200ms même aux heures de pointe,
100% des données collectées avec succès."
```

**Pourquoi c'est excellent :**
- ✅ Structure claire
- ✅ Chiffres précis
- ✅ Technologies nommées
- ✅ Résultat mesurable

---

### ❓ "Pourquoi avez-vous choisi une architecture microservices pour Seller ?"

**Réponse ARCHITECTE :**
```
"L'ancien monolithe avait 3 problèmes critiques :

1. SCALABILITÉ : Un pic sur le module paiement ralentissait
   TOUT le système, même l'authentification

2. DÉPLOIEMENT : Chaque hotfix nécessitait un redéploiement
   complet = 2h de downtime

3. MAINTENANCE : 350+ utilisateurs impactés à chaque bug

Architecture microservices :
→ Service Auth (LDAP) : scale indépendamment
→ Service Catalog : cache Redis dédié
→ Service Orders : queue RabbitMQ pour pics
→ API Gateway : routing intelligent

RÉSULTAT : +100% de scalabilité, déploiements sans downtime,
isolation des pannes. Marjane a validé en production sous 3 mois."
```

**Ce qui tue :**
- ✅ Problème business clairement identifié
- ✅ Solution technique justifiée
- ✅ Impact client tangible

---

## 💻 STACK TECHNIQUE

### ❓ "Pourquoi Spring Boot 3.2 et Java 21 ?"

**Réponse TECH LEAD :**
```
"3 raisons stratégiques :

1. PERFORMANCE :
   - Virtual Threads (Java 21) = -70% de RAM sur les I/O
   - GraalVM native image = startup en 0.5s vs 5s

2. PRODUCTIVITÉ :
   - Pattern matching = code plus lisible
   - Records = moins de boilerplate
   - Spring Boot 3.2 = meilleure observabilité native

3. LONG-TERME :
   - LTS jusqu'en 2031
   - Support des standards cloud-native (OpenTelemetry)

Sur SEDAS, les Virtual Threads ont permis de gérer
10 000 requêtes/s avec seulement 2GB de RAM."
```

**Impact sur le recruteur :**
- ✅ Veille technologique active
- ✅ Choix justifiés (pas juste le hype)
- ✅ Performance mesurée

---

### ❓ "Next.js 15 ou React pur, pourquoi Next.js ?"

**Réponse FULL STACK :**
```
"Next.js apporte 4 avantages critiques pour SEDAS :

1. SEO : SSR natif pour indexation Google des données stats
2. PERFORMANCE : Static Generation = temps de chargement < 1s
3. API Routes : Backend léger intégré (pas besoin d'Express)
4. IMAGE OPTIMIZATION : Cartes du Sénégal compressées auto

React pur aurait nécessité :
- Setup SSR custom (3-5 jours de dev)
- Config Webpack complexe
- Serveur Node.js séparé

Next.js = 70% de temps de setup économisé + meilleures perfs."
```

**Ce qui marque :**
- ✅ Comparaison technique objective
- ✅ Gain de temps chiffré
- ✅ Use case concret

---

## 🗄️ BASES DE DONNÉES

### ❓ "PostgreSQL vs MySQL, votre choix ?"

**Réponse DATABASE EXPERT :**
```
"PostgreSQL pour 90% de mes projets, voici pourquoi :

SDMX nécessite :
- JSONB : stockage flexible pour métadonnées statistiques
- Full-text search : recherche dans les datasets
- Extensions PostGIS : cartographie des 14 régions
- ACID strict : intégrité critique pour données officielles

MySQL = bon pour read-heavy simple
PostgreSQL = meilleur pour complex queries + data integrity

Sur SEDAS : requêtes JSONB 3x plus rapides qu'une approche
SQL Server avec JSON as TEXT."
```

**Bonus points :**
- ✅ Use case spécifique
- ✅ Comparaison nuancée
- ✅ Performance chiffrée

---

# 2️⃣ QUESTIONS COMPORTEMENTALES (STAR)

## 🎯 Méthode STAR (CRITIQUE)

**S**ituation : Contexte
**T**ask : Votre mission
**A**ction : Ce que VOUS avez fait
**R**esult : Résultat mesurable

---

### ❓ "Parlez-moi d'un projet difficile que vous avez mené"

**Réponse STAR PARFAITE :**
```
SITUATION :
"Référendum constitutionnel de Guinée, 21 septembre 2025.
Événement national critique, 0 marge d'erreur acceptée."

TASK :
"Déployer en 3 semaines un système temps réel capable de :
- Collecter les résultats de 1000+ bureaux de vote
- Diffuser les résultats en temps réel au gouvernement
- Garantir 99.99% de disponibilité"

ACTION :
"J'ai conçu une architecture résiliente :
1. Serveurs en haute disponibilité (failover automatique)
2. Backend Spring Boot avec queue Redis pour pics
3. Dashboard Next.js avec WebSocket pour temps réel
4. Tests de charge : simulation de 5000 connexions/s
5. Plan de disaster recovery testé 3 fois avant J-Day"

RESULT :
"Le 21 septembre :
- 0 seconde de downtime
- 100% des résultats collectés en temps réel
- Gouvernement informé en continu
- Validation internationale du processus
→ Mission critique accomplie avec succès."
```

**Pourquoi c'est PARFAIT :**
- ✅ Contexte dramatique (pression haute)
- ✅ Actions concrètes et détaillées
- ✅ Résultat exceptionnellement clair
- ✅ Prouve gestion de pression

---

### ❓ "Décrivez un conflit d'équipe que vous avez résolu"

**Réponse LEADER :**
```
SITUATION :
"Sur PIGOR, conflit entre équipe dev (moi) et équipe métier ANSD.
Ils voulaient 50 nouvelles fonctionnalités en 2 semaines
avant le lancement du recensement."

TASK :
"Livrer un produit fonctionnel SANS compromettre la qualité
ni cramer l'équipe."

ACTION :
"1. Réunion de priorisation avec méthode MoSCoW :
   - Must have : 12 features critiques
   - Should have : 18 features post-lancement
   - Could have : 20 features nice-to-have

2. Démonstration technique :
   - Montré que 50 features = 8 semaines réalistes
   - Proposé MVP en 2 semaines + itérations après

3. Compromis gagnant-gagnant :
   - Livraison des 12 features critiques en 2 semaines
   - Roadmap claire pour les 38 autres en 3 sprints post-launch"

RESULT :
"Recensement lancé à temps avec fonctionnalités critiques.
38 autres features livrées progressivement sur 6 semaines.
Équipe métier satisfaite, 0 burnout dev, relation renforcée."
```

**Ce qui impressionne :**
- ✅ Communication et négociation
- ✅ Approche méthodique (MoSCoW)
- ✅ Win-win mindset
- ✅ Leadership sans autorité formelle

---

### ❓ "Racontez un échec et ce que vous en avez appris"

**Réponse HONNÊTE ET SMART :**
```
SITUATION :
"Premier sprint de SEDAS. J'ai voulu implémenter TOUT
le module d'export (CSV, Excel, SDMX, Stata, SPSS) en 1 sprint."

TASK :
"Livrer le module d'export fonctionnel en 2 semaines."

ACTION :
"J'ai sous-estimé la complexité :
- Chaque format a ses spécificités (encodage, métadonnées)
- Tests unitaires insuffisants
- Pas de revue de code intermédiaire
→ À J-14, seulement CSV fonctionnait correctement"

RESULT (L'ÉCHEC) :
"Sprint raté. Livraison partielle. PO déçu."

LEARNING (LA VALEUR) :
"3 leçons appliquées depuis :

1. DÉCOMPOSITION : 1 format = 1 sprint dédié
   → Sprints suivants : 100% de réussite

2. FEEDBACK CONTINU : Daily code reviews
   → Bugs détectés en < 24h au lieu de J-14

3. MVP MINDSET : Livrer CSV parfait d'abord,
   puis itérer sur les autres formats
   → 4 formats livrés en 8 semaines vs 5 en 2 (échec)

Résultat final : SEDAS a tous les formats, production stable,
et cette expérience m'a rendu meilleur en estimation."
```

**Pourquoi c'est EXCELLENT :**
- ✅ Honnêteté (humanise le candidat)
- ✅ Analyse lucide de l'échec
- ✅ Apprentissage concret appliqué
- ✅ Prouve maturité et résilience

---

### ❓ "Comment gérez-vous le stress et les deadlines serrées ?"

**Réponse SENIOR :**
```
"3 stratégies éprouvées :

1. PRIORISATION RUTHLESS (Eisenhower Matrix)
   Exemple PIGOR : 15 000 agents = deadline impossible à rater
   → Focus 100% sur fonctionnalités critiques uniquement
   → Nice-to-have reportés post-lancement

2. COMMUNICATION PROACTIVE
   Dès que je détecte un risque de retard :
   → J'alerte le PO avec options (scope réduit vs délai +X jours)
   → Jamais de mauvaise surprise à J-1

3. PRENDRE SOIN DE MOI
   - Sommeil : 7h minimum (productivité > héroïsme)
   - Pauses : Pomodoro 25min work / 5min break
   - Sport : 3x/semaine pour évacuer la pression

Exemple concret :
Référendum Guinée = pression maximale (événement national).
→ Planning rigoureux, communication quotidienne avec client,
→ Sommeil protégé même sous pression
→ Résultat : 0 burnout, mission réussie."
```

**Impact :**
- ✅ Approche mature et réfléchie
- ✅ Évite le cliché "je travaille 80h/semaine"
- ✅ Équilibre vie pro/perso
- ✅ Résultat prouvé

---

# 3️⃣ QUESTIONS PIÈGES & COMMENT LES DÉJOUER

## 🎭 Les Classiques Retournés

### ❓ "Pourquoi voulez-vous quitter votre poste actuel ?"

**❌ MAUVAISE Réponse :**
"Mon salaire est trop bas / Mon boss est nul / Je m'ennuie"

**✅ BONNE Réponse :**
```
"Je ne quitte pas, j'évolue vers de nouveaux défis.

À l'ANSD, j'ai accompli ce que je visais :
- SEDAS : plateforme unique en Afrique francophone ✅
- PIGOR : 18M habitants recensés avec succès ✅
- Expertise SDMX 3.0 : reconnue internationalement ✅

Aujourd'hui, je cherche à :
1. Travailler sur des systèmes à PLUS grande échelle
   (votre plateforme sert 50+ pays vs 1 pour SEDAS)

2. Contribuer à une équipe internationale
   (j'ai adoré mes missions en Guinée/Gambie/Maroc)

3. Approfondir mon expertise cloud-native
   (vos stacks AWS/Kubernetes m'attirent fortement)

C'est une évolution naturelle, pas une fuite."
```

**Pourquoi ça marche :**
- ✅ Positif (pas de critique de l'ancien employeur)
- ✅ Montre accomplissements
- ✅ Aligné avec le nouveau poste
- ✅ Ambitieux sans être arrogant

---

### ❓ "Quelle est votre plus grande faiblesse ?"

**❌ PIRE Réponse :**
"Je suis perfectionniste" (cliché détecté à 10km)

**✅ RÉPONSE SMART :**
```
"Documentation technique.

Contexte : Je suis très fort en code et architecture,
mais j'ai tendance à sous-documenter mes APIs.

Impact : Sur PIGOR, l'onboarding des nouveaux devs
prenait 3-4 jours au lieu de 1-2.

ACTIONS PRISES :
1. Adopté Swagger/OpenAPI pour auto-documentation
2. README template systématique (architecture, setup, examples)
3. Code reviews : documentation = critère bloquant

Résultat :
- SEDAS : documentation complète dès le départ
- Onboarding nouveaux devs : 1 jour vs 3-4 avant
- Retours positifs de l'équipe

Je progresse, mais c'est un effort conscient continu."
```

**Pourquoi c'est PARFAIT :**
- ✅ Faiblesse réelle (crédible)
- ✅ Pas critique pour le poste
- ✅ Actions correctives concrètes
- ✅ Progrès mesurable
- ✅ Montre auto-awareness

---

### ❓ "Où vous voyez-vous dans 5 ans ?"

**❌ MAUVAISE Réponse :**
"À votre place" / "Je ne sais pas" / "Créer ma boîte"

**✅ BONNE Réponse :**
```
"Dans 5 ans, je me vois comme Staff Engineer ou Tech Lead
sur des systèmes statistiques à impact mondial.

TRAJECTOIRE :
Années 1-2 : Maîtriser votre stack et contribuer à 2-3
             projets majeurs (ex: migration SDMX 3.0)

Années 3-4 : Mentorer des juniors/mid-level
             Lead technique sur 1 projet stratégique

Année 5 : Staff Engineer ou Architect
          Influence technique sur la roadmap produit
          Référence SDMX dans l'organisation

Je ne vise pas forcément le management pur.
Je préfère l'expertise technique profonde (Individual
Contributor track) avec du leadership d'influence.

Votre organisation offre-t-elle cette double voie
IC/Manager ?"
```

**Pourquoi c'est EXCELLENT :**
- ✅ Ambition claire mais réaliste
- ✅ Aligné avec l'entreprise (pas "je pars")
- ✅ Montre réflexion sur la carrière
- ✅ Retourne une question au recruteur (engage)

---

### ❓ "Pourquoi devrait-on vous choisir VOUS ?"

**❌ MAUVAISE Réponse :**
"Je suis le meilleur" / "Je travaille dur" / "J'aime coder"

**✅ RÉPONSE QUI TUE :**
```
"3 raisons différenciantes :

1. EXPERTISE UNIQUE : SDMX 3.0
   → Vous cherchez quelqu'un capable de dialoguer avec
      Eurostat, FMI, Banque Mondiale
   → Je suis l'un des rares en Afrique à avoir déployé
      SDMX 3.0 en production (SEDAS)
   → Gain immédiat : je connais les pièges et best practices

2. EXPÉRIENCE PROJETS CRITIQUES
   → J'ai géré des systèmes où l'échec n'est PAS une option
      (recensements nationaux, référendum constitutionnel)
   → Votre SLA 99.99% ? C'est mon quotidien.
   → Impact : fiabilité prouvée sous pression extrême

3. IMPACT MESURABLE
   → Mes projets ont des ROI concrets :
      270M FCFA économisés (SEDAS)
      18M personnes impactées (PIGOR)
      500+ producteurs digitalisés (SysAgri)
   → Je ne code pas pour coder, je livre de la valeur business

Votre besoin = Expert SDMX avec track record prouvé.
Mon profil = Exactement ça + expérience internationale.

Je peux contribuer dès la semaine 1."
```

**Impact MASSIF :**
- ✅ Spécifique et factuel
- ✅ Aligné avec LEUR besoin
- ✅ Chiffres concrets
- ✅ Confiance sans arrogance
- ✅ Call-to-action subtil

---

# 4️⃣ VOS QUESTIONS À LEUR POSER

## 🎯 Questions Intelligentes (Montrent Votre Niveau)

### 📊 Questions Techniques (Prouvent Expertise)

```
1. "Quelle est votre stratégie de migration vers SDMX 3.0 ?
   Avez-vous déjà identifié les breaking changes vs 2.1 ?"

   → Montre : Expertise SDMX, vision long-terme

2. "Comment gérez-vous la scalabilité sur les pics de charge ?
   Kubernetes, serverless, ou approche hybride ?"

   → Montre : Préoccupation architecture

3. "Quelle est votre stack observabilité ?
   (Logs, metrics, traces) OpenTelemetry ?"

   → Montre : Mindset DevOps/SRE

4. "Comment est structurée l'équipe technique ?
   Squads autonomes, feature teams, ou composant teams ?"

   → Montre : Intérêt pour l'organisation
```

---

### 💼 Questions Business (Prouvent Maturité)

```
5. "Quel est le plus grand défi technique de l'entreprise
   pour les 12 prochains mois ?"

   → Montre : Vision stratégique

6. "Comment mesurez-vous le succès d'un nouveau projet ?
   OKRs ? KPIs spécifiques ?"

   → Montre : Orientation résultat

7. "Quelle est la roadmap produit pour les 6 prochains mois ?
   Où voyez-vous ma contribution la plus impactante ?"

   → Montre : Proactivité et alignement
```

---

### 🌱 Questions Culture (Prouvent Fit)

```
8. "Comment encouragez-vous l'innovation et l'expérimentation ?
   Avez-vous des hackathons, 20% time, ou autre ?"

   → Montre : Curiosité et envie d'apprendre

9. "Comment gérez-vous l'équilibre vie pro/perso ?
   Remote, flex hours, on-call rotation ?"

   → Montre : Maturité (pas juste coder 24/7)

10. "Pouvez-vous me parler d'un projet récent qui a échoué
    et comment l'équipe a rebondi ?"

    → Montre : Intérêt pour la culture d'échec saine
```

---

### 🚀 Question Finale (TOUJOURS Poser)

```
11. "Basé sur notre discussion, voyez-vous des gaps ou des
    réserves concernant mon profil pour ce poste ?"

    → Permet de :
    ✅ Adresser les objections immédiatement
    ✅ Montrer confiance et ouverture au feedback
    ✅ Transformer une réserve en opportunité de clarification
```

**Exemple de réponse si objection :**
```
Recruteur : "Vous n'avez pas d'expérience Kubernetes"

Vous : "C'est vrai, je n'ai pas géré Kubernetes en production.
       MAIS j'ai une solide expérience Docker (3 ans) et
       je comprends les principes d'orchestration.

       De plus, j'apprends vite : sur SEDAS, j'ai maîtrisé
       SDMX 3.0 (complexe) en 2 mois avec formation autonome.

       Je suis prêt à prendre une certification Kubernetes
       avant mon onboarding si c'est bloquant."
```

---

# 5️⃣ NÉGOCIATION SALARIALE

## 💰 Règles d'Or

### Règle #1 : Ne JAMAIS Donner Votre Salaire Actuel

**❌ SI on demande : "Quel est votre salaire actuel ?"**

**Réponse :**
```
"Je préfère discuter de la valeur que j'apporte au poste
plutôt que de mon historique salarial.

Quelle est la fourchette budgétée pour ce rôle ?"
```

---

### Règle #2 : Faire Parler L'Employeur EN PREMIER

**❌ SI on demande : "Quelles sont vos prétentions salariales ?"**

**Réponse SMART :**
```
"J'aimerais d'abord mieux comprendre l'ensemble du package :
- Responsabilités exactes
- Équipe et projets
- Opportunités d'évolution
- Avantages (remote, formation, etc.)

Cela dit, quelle est la fourchette pour ce niveau de poste
dans votre grille salariale ?"
```

---

### Règle #3 : Donner une FOURCHETTE (Si Obligé)

**Si vraiment pressé de donner un chiffre :**

```
"Basé sur mon expertise SDMX 3.0 et mes 8 ans d'expérience,
je vise une fourchette de 65-85K€ annuel brut.

Mais je reste ouvert à discuter selon l'ensemble du package
et les opportunités d'évolution."
```

**Pourquoi cette fourchette :**
- Bas de fourchette = acceptable minimum
- Haut de fourchette = objectif ambitieux
- Large range = flexibilité de négociation

---

### Règle #4 : Négocier l'ENSEMBLE du Package

**Au-delà du salaire, négociez :**

```
✅ SALAIRE DE BASE : 65-85K€

✅ BONUS/VARIABLE : 10-15% du salaire base

✅ REMOTE : 2-3 jours/semaine minimum

✅ FORMATION : Budget annuel (2-5K€)
   - Conférences (SDMX Summit, etc.)
   - Certifications (AWS, Kubernetes)

✅ ÉQUIPEMENT : MacBook Pro 16" + écran externe

✅ CONGÉS : 25-30 jours/an (négociable)

✅ MOBILITÉ : Remboursement missions (si consulting)

✅ STOCK OPTIONS (si startup) : 0.1-0.5%
```

---

### Règle #5 : Script de Négociation

**Scénario : Ils offrent 60K, vous visez 75K**

```
Vous : "Je vous remercie pour cette offre. Je suis très
       enthousiaste à l'idée de rejoindre l'équipe.

       Cependant, basé sur :
       - Mon expertise SDMX 3.0 (rare sur le marché)
       - Mes résultats mesurables (270M FCFA économisés)
       - Ma capacité à contribuer dès la semaine 1

       Je pensais plutôt à une fourchette de 70-75K€.

       Pouvons-nous explorer cette possibilité ?"

Si refus :

Vous : "Je comprends les contraintes budgétaires.

       Si 75K n'est pas possible aujourd'hui, pouvons-nous
       envisager :
       - 65K avec revue salariale à 6 mois (au lieu de 12)
       - + Budget formation de 3K€/an
       - + 3 jours remote/semaine

       Cela me permettrait de dire oui avec enthousiasme."
```

**Psychologie :**
- ✅ Remercie d'abord (positif)
- ✅ Justifie avec VALEUR (pas besoin)
- ✅ Propose alternative si refus
- ✅ Gagnant-gagnant

---

# 6️⃣ SIMULATIONS D'ENTRETIENS PAR TYPE

## 🏛️ Organisation Internationale (Banque Mondiale, UNFPA)

### Phase 1 : Screening RH (30min)

**Questions Attendues :**

```
1. "Pourquoi nous ?"
   → Réponse : Mission sociale + SDMX expertise

2. "Expérience multiculturelle ?"
   → Réponse : 4 pays (Sénégal, Guinée, Gambie, Maroc)

3. "Mobilité géographique ?"
   → Réponse : "Oui, j'ai déjà travaillé en mission courte
               en Guinée et Gambie. Je suis ouvert à des
               déploiements de 3-6 mois."

4. "Niveau d'anglais ?"
   → Réponse : "Professionnel. J'ai rédigé la documentation
               technique de SEDAS en anglais et présenté
               des démos à des partenaires anglophones."
```

---

### Phase 2 : Technique (1h)

**Exercice Type : Conception Système SDMX**

```
Question :
"Concevez une architecture pour diffuser les données
statistiques de 50 pays vers Eurostat en SDMX 3.0.
Contraintes : 10 To de données, 1000 requêtes/s aux heures
de pointe, SLA 99.99%."

Réponse Structurée :

1. COLLECTE (Data Ingestion)
   - API Gateway : validation des données entrantes
   - Message Queue (Kafka) : buffer pour pics de charge
   - Transformation ETL : normalisation vers SDMX 3.0

2. STOCKAGE (Data Lake + Database)
   - S3/MinIO : stockage brut (10 To)
   - PostgreSQL : métadonnées SDMX + index
   - Redis : cache des requêtes fréquentes

3. EXPOSITION (API Layer)
   - REST API : SDMX 3.0 JSON endpoints
   - GraphQL : requêtes flexibles pour analysts
   - CDN : distribution géographique (latence < 100ms)

4. SCALABILITÉ
   - Kubernetes : auto-scaling horizontal
   - Load Balancer : distribution intelligente
   - Read Replicas : séparation read/write

5. MONITORING (SLA 99.99%)
   - Prometheus + Grafana : métriques temps réel
   - PagerDuty : alerting 24/7
   - Health checks : /health endpoint

Justification :
→ Architecture éprouvée sur SEDAS (échelle nationale)
→ Scalable à 50 pays via Kubernetes
→ SDMX 3.0 natif (JSON = performance optimale)
```

**Ce qui impressionne :**
- ✅ Structure claire (5 layers)
- ✅ Technologies nommées et justifiées
- ✅ Chiffres de performance
- ✅ Lien avec expérience passée

---

### Phase 3 : Comportemental (45min)

**Question Critique :**
```
"Comment géreriez-vous un désaccord avec un expert
statisticien senior sur l'implémentation SDMX ?"

Réponse :

"J'ai vécu exactement cette situation sur SEDAS.

SITUATION :
Le statisticien en chef voulait un format propriétaire
'plus simple' que SDMX pour les exports CSV.

APPROCHE :
1. ÉCOUTE : J'ai d'abord compris sa préoccupation
   → Il trouvait SDMX 'trop complexe' pour les chercheurs

2. DATA-DRIVEN : J'ai proposé un A/B test
   → Export SDMX vs export propriétaire
   → Retours de 5 chercheurs externes

3. COMPROMIS : Solution hybride
   → Export 'Simple CSV' pour débutants
   → Export 'SDMX CSV' pour experts/institutions
   → Les deux coexistent

RÉSULTAT :
→ Statisticien satisfait (simplicité préservée)
→ Standards SDMX respectés (interopérabilité)
→ Utilisateurs contents (choix selon niveau)

Principe : Data > Opinions. Tests > Débats stériles."
```

---

## 🚀 Startup/Scale-up Tech

### Phase 1 : Fit Culturel (30min)

**Questions Attendues :**

```
1. "Pourquoi quitter une institution stable (ANSD)
   pour une startup ?"

   → Réponse :
   "J'aime l'impact des institutions publiques, mais
   je veux tester la vélocité startup.

   Sur SEDAS, j'ai dû naviguer 6 mois de validation
   pour chaque décision technique.

   En startup, je cherche :
   - Cycle de feedback rapide (ship weekly)
   - Autonomie technique (ownership)
   - Expérimentation (fail fast, learn faster)

   Mon expérience gov m'a appris la rigueur,
   je veux y ajouter la vitesse."

2. "Confortable avec l'ambiguïté ?"

   → Réponse :
   "Totalement. Sur le Référendum Guinée, j'ai dû
   concevoir un système en 3 semaines avec des specs
   changeant quotidiennement.

   Ma méthode :
   - Identifier le MVP absolu (core features)
   - Itérer rapidement (démos daily)
   - Garder l'architecture flexible (refactoring facile)

   Résultat : système livré à temps malgré 15 changements
   de requirements."
```

---

### Phase 2 : Technique (1h30)

**Exercice Type : Live Coding**

```
Problème :
"Implémenter un endpoint API qui retourne les statistiques
de population d'un pays en format SDMX 3.0 JSON.

Contraintes :
- Spring Boot
- Cache Redis pour performance
- Rate limiting (100 req/min par IP)
- Tests unitaires"

Approche :

1. CLARIFICATIONS (2min)
   "Questions avant de coder :
   - Format SDMX exact ? (DataStructure, Dataflow ?)
   - Source des données ? (DB, API externe ?)
   - Gestion erreurs ? (404 si pays inconnu ?)"

2. ARCHITECTURE (5min)
   [Dessiner au tableau]
   Controller → Service → Repository
                ↓
              Cache (Redis)

3. CODE (45min)
   [Coder en TDD : Test → Code → Refactor]

   @RestController
   @RequestMapping("/api/v1/sdmx")
   public class SDMXController {

       @GetMapping("/population/{country}")
       @Cacheable(value = "population", key = "#country")
       @RateLimiter(limit = 100, duration = "1m")
       public ResponseEntity<SDMXDataResponse> getPopulation(
           @PathVariable String country
       ) {
           // Implementation
       }
   }

4. TESTS (20min)
   [Écrire 3-4 tests couvrant happy path + edge cases]

5. DÉBRIEF (5min)
   "Points d'amélioration si j'avais plus de temps :
   - Pagination pour gros datasets
   - Compression gzip des réponses
   - Monitoring (Micrometer metrics)"
```

**Ce qui impressionne :**
- ✅ Pose des questions (clarification)
- ✅ Pense architecture avant code
- ✅ TDD mindset
- ✅ Conscient des edge cases
- ✅ Évoque monitoring/observabilité

---

### Phase 3 : Culture Fit (30min)

**Question Piège :**
```
"On ship le vendredi soir. Ça vous pose problème ?"

❌ MAUVAISE Réponse :
"Pas de problème, je peux travailler le weekend"

✅ BONNE Réponse :
"Question intéressante. Ça dépend du contexte.

POUR un hotfix critique (bug bloquant production) :
→ Oui, je reste vendredi soir pour fixer

CONTRE un deploy de nouvelle feature :
→ Non, je préfère mardi ou mercredi
→ Raison : si bug, toute l'équipe est dispo pour fixer
→ Vendredi soir = bug dormant pendant 48h = mauvaise UX

Sur PIGOR, on a appris à nos dépens :
→ Deploy vendredi = bug découvert lundi matin
→ Depuis : freeze des deploys le vendredi
→ Résultat : -70% d'incidents weekend

Je suis flexible pour les urgences, mais je pousse
pour des pratiques saines long-terme."
```

**Impact :**
- ✅ Nuancé (pas juste "oui" ou "non")
- ✅ Data-driven (expérience passée)
- ✅ Pense long-terme (santé de l'équipe)
- ✅ Montre leadership (challenge le status quo)

---

# 7️⃣ CHECKLIST FINALE AVANT L'ENTRETIEN

## ✅ Veille Technique (30min)

```
[ ] Lire 3 derniers articles du blog tech de l'entreprise
[ ] Check leur stack sur StackShare
[ ] Identifier 1-2 technologies que vous ne connaissez pas
    → Lire intro rapide (Wikipedia suffit)
[ ] Préparer 1 question technique pertinente basée sur ça
```

---

## ✅ Préparation Matérielle

```
[ ] Batterie laptop chargée (si remote)
[ ] Backup plan (téléphone pour hotspot si internet coupe)
[ ] Casque/micro testés (pas de bruit parasite)
[ ] Fond neutre (pas de linge qui sèche visible)
[ ] Lumière : visage bien éclairé (pas de contre-jour)
[ ] Verre d'eau à portée de main
[ ] Bloc-notes + stylo pour prendre des notes
```

---

## ✅ Stories Prêtes (Méthode STAR)

```
[ ] 1 projet difficile (Référendum Guinée)
[ ] 1 conflit résolu (PIGOR - priorisation features)
[ ] 1 échec + learning (SEDAS - sprint raté)
[ ] 1 innovation technique (SDMX 3.0 sur SEDAS)
[ ] 1 leadership (formation équipe ANSD)
```

---

## ✅ Questions à LEUR Poser (5 minimum)

```
[ ] 1 question technique (stack, architecture)
[ ] 1 question produit (roadmap, défis)
[ ] 1 question équipe (structure, process)
[ ] 1 question culture (valeurs, remote)
[ ] 1 question finale ("Réserves sur mon profil ?")
```

---

# 8️⃣ RÉSUMÉ : Votre Pitch Ultime (2 min)

**"Présentez-vous en 2 minutes"**

```
"Bonjour, je suis Bouna Dramé, Architecte Full Stack Senior
avec 8 ans d'expérience en systèmes d'information critiques.

MON EXPERTISE UNIQUE :
Je suis spécialisé en SDMX 3.0, le standard international
pour les données statistiques. J'ai développé SEDAS, la
première plateforme SDMX 3.0 d'Afrique francophone, qui
a permis à l'ANSD d'économiser 270M FCFA.

MES PROJETS LES PLUS IMPACTANTS :
- PIGOR : Recensement de 18M d'habitants avec 15 000 agents
  → Système critique national, 0 marge d'erreur

- Référendum Guinée : Suivi temps réel d'un événement
  constitutionnel majeur, 0 seconde de downtime

- Seller (Maroc) : Refonte architecture microservices,
  +100% de scalabilité pour Marjane/Electro Planete

MA STACK MODERNE :
Backend : Spring Boot 3.2, Java 21
Frontend : Next.js 15, React 19
Infra : Docker, Kubernetes, PostgreSQL, Redis
Architecture : Microservices, API-First, Cloud-native

CE QUI ME DIFFÉRENCIE :
1. Expertise technique rare (SDMX 3.0)
2. Expérience internationale (Sénégal, Guinée, Gambie, Maroc)
3. Impact mesurable (chiffres, pas du storytelling)
4. Fiabilité prouvée sur projets critiques

POURQUOI VOUS :
Votre mission [adapter selon entreprise] résonne avec mon
expérience SDMX et mon envie de travailler à l'échelle
internationale.

Je peux contribuer dès la semaine 1. Parlons de comment !"
```

---

# 🏆 BONUS : Phrases Qui Tuent

## 💎 Pour Conclure une Réponse

```
"Et c'est mesurable : +100% de performance en 3 mois."

"Résultat concret : 270M FCFA économisés."

"Impact direct : 18M de personnes impactées."

"Validé en production : 0 incident depuis le lancement."
```

---

## 💎 Pour Gérer une Question Difficile

```
"Excellente question. Laissez-moi y réfléchir 5 secondes..."
[Pause, puis réponse structurée]

"Je n'ai pas d'expérience directe sur X, MAIS j'ai une
expérience similaire sur Y qui est transférable parce que..."

"Honnêtement, je ne connais pas la réponse. En revanche,
voici comment je m'y prendrais pour la trouver..."
[Montre votre processus de pensée]
```

---

## 💎 Pour Montrer Votre Valeur

```
"Sur SEDAS, j'ai identifié un bug critique qui aurait pu
coûter 50M FCFA en retraitement de données."

"J'ai formé 5 développeurs juniors qui sont maintenant
autonomes sur la stack Spring Boot."

"Mon code a été adopté comme standard par 3 autres
instituts statistiques africains."
```

---

# ✅ VERDICT FINAL

**Vous êtes PRÊT si :**

```
✅ Vous pouvez expliquer SDMX 3.0 en 30 secondes
✅ Vous avez 5 stories STAR mémorisées
✅ Vous avez 5 questions à LEUR poser
✅ Vous connaissez votre fourchette salariale
✅ Vous avez un pitch de 2 minutes fluide
```

**Votre plus grand atout :**
Expertise rare (SDMX) + Impact prouvé (chiffres) + Projets critiques

**Votre point d'amélioration :**
Pratiquez les réponses à voix haute (mirror practice)

---

🎯 **Vous avez TOUT pour réussir. Allez décrocher cette offre !** 🚀

---

**Document créé le :** 14 février 2026
**Par :** Expert Recruteur Senior
**Pour :** Bouna Dramé - Architecte Full Stack
**Version :** 1.0
