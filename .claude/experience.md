O'KANI — Plateforme de Gestion Immobilière Multi-Agences

Description

Application web de gestion immobilière utilisée par plusieurs agences au Sénégal. Digitalise l'ensemble du cycle locatif : locataires, contrats, encaissements, dépenses,
arriérés, salaires, prêts et génération automatique de documents PDF (quittances, mises en demeure, lettres de relance).

Stack Technique

- Backend : Symfony 6.4, PHP 8, Doctrine ORM 2.11
- Frontend : Twig, Bootstrap 4/5, jQuery, DataTables, Chart.js
- API REST : API Platform 3.4 + JWT (Lexik JWT Bundle)
- Base de données : MySQL 8.0 (Docker)
- PDF : TCPDF 6.4 (classes custom)
- Audit : Gedmo Loggable (traçabilité des modifications)
- Infra : Docker, VPS Contabo, déploiement Git

Fonctionnalités Clés

- Gestion multi-immeubles avec tableau de bord par agence
- Suivi des contrats, échéances et renouvellements
- Encaissement des loyers avec détection automatique des arriérés
- Génération PDF : quittances, lettres de relance, mises en demeure, listes de créanciers
- Dashboard statistiques (encaissements vs dépenses, taux de recouvrement)
- Système de rôles granulaire (opérateur, agent, comptable)
- Journal d'actions (audit trail complet)
- Module salaires et prêts employés
- API REST pour intégrations futures

Défis & Solutions
┌─────────────────────────┬─────────────────────────────────────────────────────┬─────────────────────────────────────────────────┬──────────────────────────────────────────┐
│ Défi │ Impact avant │ Solution │ Impact mesurable │
├─────────────────────────┼─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Passage du cahier │ Gestion manuelle sur cahiers et tableurs : perte │ Conception et développement d'une application │ Zéro perte de données, accès en temps │
│ papier au numérique │ d'informations, doublons, pas de visibilité globale │ web complète couvrant tout le cycle locatif │ réel depuis n'importe quel appareil │
├─────────────────────────┼─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ │ Des années de données historiques sur papier/Excel │ Analyse des données existantes, scripts │ Migration réussie de l'historique │
│ Import de l'existant │ (locataires, contrats, paiements) à récupérer │ d'import, nettoyage et réconciliation des │ complet, continuité d'activité sans │
│ │ │ données │ rupture │
├─────────────────────────┼─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Modélisation métier │ Règles métier nombreuses : contrats multi-périodes, │ Phase de conception et d'analyse approfondie │ Modèle couvrant 100% des cas métier │
│ complexe │ arriérés cumulés, ruptures, cautions, assignations │ avec les agences, modèle relationnel à 30+ │ rencontrés par les agences │
│ │ │ entités │ │
├─────────────────────────┼─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Multi-agences avec │ Chaque agence doit voir uniquement ses immeubles, │ Système de rôles granulaire, isolation des │ Plusieurs agences sur la même plateforme │
│ données sensibles │ ses locataires, ses finances │ données par opérateur, audit trail sur chaque │ en toute confidentialité │
│ │ │ action │ │
├─────────────────────────┼─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Documents légaux │ Quittances, mises en demeure et relances rédigées │ Génération PDF automatique avec templates │ Génération instantanée, documents │
│ automatisés │ manuellement à chaque fois │ personnalisés par agence (logo, adresse, │ professionnels et conformes │
│ │ │ signature) │ │
├─────────────────────────┼─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Suivi des impayés et │ Pas de visibilité sur les créanciers, relances │ Calcul automatique des arriérés, tableau de │ Visibilité en temps réel sur les │
│ arriérés │ oubliées, pertes financières │ créanciers, alertes, statistiques de │ impayés, taux de recouvrement amélioré │
│ │ │ recouvrement │ │
├─────────────────────────┼─────────────────────────────────────────────────────┼─────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Performance et │ Application ralentie par l'accumulation de données │ Requêtes SQL batch, cache Doctrine, suppression │ Temps de chargement divisé par 2, │
│ optimisation │ et assets non optimisés │ des doublons d'assets, chargement conditionnel │ requêtes SQL réduites de 100+ à 15 │
└─────────────────────────┴─────────────────────────────────────────────────────┴─────────────────────────────────────────────────┴──────────────────────────────────────────┘
Points Forts

- Dématérialisation complète : du cahier papier à une plateforme web professionnelle
- Utilisé en production par plusieurs agences immobilières au Sénégal
- Entièrement en français : interface, PDF, formats monétaires (FCFA)
- Audit complet : chaque modification tracée avec auteur et timestamp
- Scalable : architecture multi-tenant, API REST prête pour mobile
