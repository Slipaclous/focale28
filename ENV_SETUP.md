# Configuration des variables d'environnement

Pour que le formulaire de contact fonctionne correctement, vous devez configurer les variables d'environnement suivantes dans un fichier `.env.local` à la racine du projet.

## Variables requises

### 1. Configuration Resend (envoi d'emails)

```env
# Clé API Resend
# Obtenez votre clé sur https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Adresse email de destination pour les messages du formulaire
CONTACT_EMAIL=focale2.8@gmail.com

# Adresse email d'expéditeur (doit être vérifiée dans Resend)
# Format: "Nom <email@domaine.com>" ou simplement "email@domaine.com"
RESEND_FROM_EMAIL=Contact <noreply@votre-domaine.com>
```

**Note importante** : Pour utiliser Resend, vous devez :
1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine ou utiliser l'email de test fourni par Resend
3. Obtenir votre clé API dans les paramètres

### 2. Configuration Google reCAPTCHA v3

```env
# Clé publique (visible côté client)
# Obtenez vos clés sur https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI

# Clé secrète (côté serveur uniquement)
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

**Note importante** : Pour utiliser reCAPTCHA, vous devez :
1. Créer un site sur [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Choisir reCAPTCHA v3 (recommandé, invisible)
3. Ajouter votre domaine (ex: `localhost` pour le développement, `focale28.be` pour la production)
4. Copier les clés Site Key et Secret Key

## Fichier .env.local

Créez un fichier `.env.local` à la racine du projet avec toutes les variables ci-dessus :

```env
# Resend
RESEND_API_KEY=votre_cle_resend
CONTACT_EMAIL=focale2.8@gmail.com
RESEND_FROM_EMAIL=Contact <noreply@votre-domaine.com>

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=votre_site_key
RECAPTCHA_SECRET_KEY=votre_secret_key
```

## Mode développement

Si vous ne configurez pas reCAPTCHA, le formulaire fonctionnera toujours mais sans protection anti-bot. Les emails ne seront pas envoyés sans la configuration Resend.

## Déploiement

N'oubliez pas de configurer ces variables d'environnement dans votre plateforme de déploiement (Vercel, Netlify, etc.).

