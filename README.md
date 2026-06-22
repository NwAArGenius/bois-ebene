# Bois d'Ébène — Site vitrine

Site vitrine premium pour l'Agence Immobilière Bois d'Ébène (Dakar, Sénégal).
React 18 + Vite + Tailwind CSS + Framer Motion + lucide-react. One-page,
sans backend : le formulaire de contact ouvre WhatsApp avec un message
pré-rempli.

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build de production
```

## Déploiement avec Docker

Le projet inclut un `Dockerfile` (build Vite → service statique Nginx) et un
`docker-compose.yml`. Le site est exposé sur le port **8085** de l'hôte
(les ports 80 et 3001 ne sont pas utilisés, y compris en interne au conteneur) :

```bash
docker compose up -d --build   # démarrer (http://localhost:8085)
docker compose ps              # vérifier l'état (doit afficher "healthy")
docker compose down            # arrêter
```

Pour changer le port exposé, modifier `docker-compose.yml`, `nginx.conf`
(directive `listen`) et le `Dockerfile` (`EXPOSE` + `HEALTHCHECK`) :

```yaml
ports:
  - "8085:8085"   # <port-hôte>:<port-conteneur>
```

## Où modifier le contenu

Tout est centralisé pour une personnalisation rapide, sans toucher aux
composants :

| Élément | Fichier |
|---|---|
| Numéro WhatsApp, téléphone, email, adresse, réseaux sociaux, quartiers couverts, liens de navigation | `src/config.js` |
| Biens en vedette (photos, prix, quartier, surface...) | `src/data/properties.js` |
| Services proposés | `src/data/services.js` |
| Témoignages clients | `src/data/testimonials.js` |
| Chiffres clés (compteurs animés) | `src/data/stats.js` |

### Changer le numéro WhatsApp

Dans `src/config.js`, modifier la constante `whatsappNumber` (format
international, sans espaces ni `+` superflus dans le lien généré) :

```js
const whatsappNumber = '+221770000000'
```

### Changer les couleurs

La palette de marque est définie dans `tailwind.config.js` :

```js
colors: {
  navy:   { DEFAULT: '#1B2456', dark: '#131A3F', light: '#2A3470' },
  orange: { DEFAULT: '#E07B3C', vif: '#F08A3E', dark: '#C9692E' },
  cream:  '#FAF8F4',
  ink:    '#0F1330',
}
```

### Ajouter / modifier un bien

Dupliquer un objet dans `src/data/properties.js` et adapter les champs
(`titre`, `quartier`, `type`: `'Vente'` ou `'Location'`, `prix`, `surface`,
`chambres`, `sallesDeBain`, `image`).

## Structure

```
src/
├── components/   # Un composant par section (Navbar, Hero, Services...)
├── data/         # Contenu éditable (biens, services, témoignages, stats)
├── utils/        # Variants Framer Motion partagés (fadeUp, stagger...)
├── config.js     # Coordonnées et infos de marque centralisées
└── App.jsx       # Assemblage des sections
```

## Stack

- React 18 + Vite
- Tailwind CSS (configuration sur-mesure : couleurs, fonts, ombres)
- Framer Motion (animations au scroll, carrousel témoignages, menu mobile)
- lucide-react (icônes — les logos de réseaux sociaux sont des SVG maison
  dans `src/components/SocialIcons.jsx`, lucide n'incluant plus les icônes
  de marques)
