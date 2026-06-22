// Variants Framer Motion partagés par toutes les sections, pour des animations cohérentes.

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
}

// Variant pour orchestrer l'apparition décalée des enfants d'une grille (cartes, listes...)
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

// Réglage commun pour déclencher l'animation une seule fois, à mi-parcours dans le viewport
export const viewportOnce = { once: true, amount: 0.25 }
