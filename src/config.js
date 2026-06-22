// Toutes les informations de contact et de marque sont centralisées ici.
// Pour personnaliser le site (numéro, email, réseaux sociaux), il suffit de modifier ce fichier.

const whatsappNumber = '+221770000000' // Format E.164, sans espaces — à remplacer par le vrai numéro

export const siteConfig = {
  agencyName: "Bois d'Ébène",
  agencyFullName: "Agence Immobilière Bois d'Ébène",
  tagline: 'Votre partenaire immobilier de confiance à Dakar',
  city: 'Dakar, Sénégal',

  // Coordonnées (placeholders — facilement modifiables)
  phoneDisplay: '+221 77 000 00 00',
  whatsappNumber,
  whatsappLink: (message = "Bonjour, je souhaite obtenir plus d'informations sur vos biens.") =>
    `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`,
  email: 'contact@boisebene-immo.sn',
  mailtoLink: (subject = "Demande d'information") =>
    `mailto:contact@boisebene-immo.sn?subject=${encodeURIComponent(subject)}`,
  address: 'Almadies, Route des Almadies, Dakar, Sénégal',

  socials: {
    facebook: 'https://facebook.com/boisebene.immo',
    instagram: 'https://instagram.com/boisebene.immo',
    linkedin: 'https://linkedin.com/company/boisebene-immo',
  },

  // Quartiers couverts par l'agence
  zonesCouvertes: [
    'Almadies',
    'Ngor',
    'Mermoz',
    'Sacré-Cœur',
    'Plateau',
    'Point E',
    'Fann',
    'Yoff',
    'Ouakam',
    'Mbao / Diamniadio',
  ],

  navLinks: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'Biens', href: '#biens' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Contact', href: '#contact' },
  ],
}
