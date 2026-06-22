// Données des biens en vedette — en dur pour la vitrine (pas de backend).
// Pour ajouter un bien, dupliquer un objet et changer les champs.

export const properties = [
  {
    id: 1,
    titre: 'Villa contemporaine avec piscine',
    quartier: 'Almadies, Dakar',
    type: 'Vente',
    prix: 185000000,
    surface: 420,
    chambres: 5,
    sallesDeBain: 4,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    titre: 'Appartement standing vue mer',
    quartier: 'Ngor, Dakar',
    type: 'Location',
    prix: 850000,
    surface: 140,
    chambres: 3,
    sallesDeBain: 2,
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    titre: 'Duplex moderne avec terrasse',
    quartier: 'Mermoz, Dakar',
    type: 'Vente',
    prix: 95000000,
    surface: 260,
    chambres: 4,
    sallesDeBain: 3,
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    titre: 'Villa familiale avec jardin',
    quartier: 'Sacré-Cœur, Dakar',
    type: 'Location',
    prix: 1200000,
    surface: 310,
    chambres: 4,
    sallesDeBain: 3,
    image:
      'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    titre: 'Penthouse de prestige',
    quartier: 'Plateau, Dakar',
    type: 'Vente',
    prix: 240000000,
    surface: 380,
    chambres: 5,
    sallesDeBain: 4,
    image:
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    titre: 'Maison contemporaine avec studio',
    quartier: 'Point E, Dakar',
    type: 'Vente',
    prix: 130000000,
    surface: 290,
    chambres: 4,
    sallesDeBain: 3,
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
  },
]

// Formate un prix en FCFA avec séparateurs d'espace : 45000000 -> "45 000 000 FCFA"
export function formatPrixFCFA(montant) {
  return `${montant.toLocaleString('fr-FR')} FCFA`
}
