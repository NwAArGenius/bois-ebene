import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react'
import { properties, formatPrixFCFA } from '../data/properties'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

function PropertyCard({ bien }) {
  const isVente = bien.type === 'Vente'

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card border border-navy/5"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={bien.image}
          alt={`${bien.titre} — ${bien.quartier}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full text-white ${
            isVente ? 'bg-navy' : 'bg-orange'
          }`}
        >
          {isVente ? 'À vendre' : 'À louer'}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1.5 text-ink/50 text-xs font-medium mb-2">
          <MapPin size={14} />
          {bien.quartier}
        </div>
        <h3 className="font-heading font-semibold text-lg text-navy mb-3">{bien.titre}</h3>

        <div className="flex items-center gap-4 text-ink/60 text-sm mb-4">
          <span className="flex items-center gap-1.5">
            <Maximize size={15} /> {bien.surface} m²
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={15} /> {bien.chambres}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={15} /> {bien.sallesDeBain}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-navy/5">
          <span className="font-heading font-bold text-orange text-lg">
            {formatPrixFCFA(bien.prix)}
            {!isVente && <span className="text-ink/40 text-xs font-normal"> /mois</span>}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Properties() {
  return (
    <section id="biens" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-orange font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
            Biens en vedette
          </span>
          <h2 className="text-navy font-heading font-bold text-3xl md:text-4xl mt-3">
            Une sélection de biens d&apos;exception
          </h2>
          <p className="text-ink/60 mt-4">
            Villas, appartements et duplex soigneusement sélectionnés dans les quartiers les plus
            recherchés de Dakar.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {properties.map((bien) => (
            <PropertyCard key={bien.id} bien={bien} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors font-semibold rounded-full px-7 py-3"
          >
            Voir tous nos biens
          </a>
        </motion.div>
      </div>
    </section>
  )
}
