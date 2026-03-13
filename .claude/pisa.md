Données Portfolio — PISA

Informations de base

Acronyme: PISA
Statut: Confidentiel
Tag: Santé Publique

Titre complet: Plateforme Intégrée de Suivi des Activités

Contexte: WVLO (World Vision Liaison Office) — Sénégal · (dates à confirmer)

Partenaires: Ministère de la Santé et de l'Action Sociale · République du Sénégal · Clinton Health Access Initiative (CHAI)

Description générale:
Système complet de suivi des activités terrain du Projet WVLO, couvrant la planification, l'exécution et la validation des activités de santé
communautaire à travers les districts sanitaires et postes de santé. Plateforme web + application mobile Flutter offline-first pour les agents sur le
terrain.

Stack technologique:
Symfony API Platform PostgreSQL Flutter JWT Auth TailwindCSS PhpSpreadsheet DomPDF

---

Défi

Coordonner les activités de santé communautaire (Dialogue Communautaire Optimisé et 10 autres types d'activités terrain) à travers plusieurs districts
sanitaires avec des agents opérant dans des zones à connectivité limitée. Les processus manuels rendaient impossible le suivi centralisé en temps
réel et la remontée fiable des données vers les décideurs.

---

Solution

Développement d'une plateforme web full-stack (Symfony 6.4 + API Platform 3.1) couplée à une application mobile Flutter offline-first. L'app mobile
synchronise les données terrain dès que la connexion est disponible via une API REST sécurisée JWT. La plateforme web couvre les 11 modules
opérationnels avec workflow de validation multi-niveaux, import/export Excel, génération de rapports PDF et tableau de bord statistique centralisé.

---

Impact mesurable

- 11 modules d'activités terrain couverts (Supervision, Sensibilisation, Dialogue Communautaire, Enquête, Formation...)
- Application mobile Flutter offline-first pour les agents terrain en zone à faible connectivité
- Workflow de validation multi-étapes avec audit trail complet
- Import/export Excel pour tous les types d'activités
- Tableau de bord statistique en temps réel pour les décideurs
- Architecture hiérarchique Districts Sanitaires → Postes de Santé → Activités

---
