import { motion } from 'framer-motion'
import { Search, MapPin, Home as HomeIcon, ArrowRight } from 'lucide-react'
import { fadeUp } from '../utils/animations'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de fond avec overlay dégradé navy pour assurer la lisibilité du texte */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=80"
          alt="Villa de prestige à Dakar"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy/60 to-navy-dark/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 pt-28 pb-16 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-block text-orange-vif font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-5"
        >
          Agence Immobilière Bois d&apos;Ébène — Dakar
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          className="text-white font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight"
        >
          Votre partenaire immobilier
          <br className="hidden sm:block" /> de confiance à Dakar
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          className="text-white/85 text-base md:text-lg mt-6 max-w-2xl mx-auto"
        >
          Vente, location, gestion locative et conseil en investissement : nous accompagnons
          propriétaires, acheteurs et investisseurs avec exigence et discrétion.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9"
        >
          <a
            href="#biens"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark transition-colors text-white font-semibold rounded-full px-7 py-3.5 shadow-soft"
          >
            Découvrir nos biens
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 transition-colors text-white font-semibold rounded-full px-7 py-3.5 backdrop-blur-sm"
          >
            Estimer mon bien
          </a>
        </motion.div>

        {/* Barre de recherche visuelle — esthétique uniquement, pas de logique de recherche réelle */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
          className="mt-12 bg-white/95 backdrop-blur rounded-2xl shadow-soft p-3 md:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 flex-1 px-4 py-2.5 md:border-r border-navy/10">
            <HomeIcon size={18} className="text-navy/60 shrink-0" />
            <select
              className="w-full bg-transparent text-ink text-sm font-medium focus:outline-none"
              defaultValue="type"
              aria-label="Type de bien"
            >
              <option value="type">Type de bien</option>
              <option value="villa">Villa</option>
              <option value="appartement">Appartement</option>
              <option value="terrain">Terrain</option>
              <option value="bureau">Bureau / Local commercial</option>
            </select>
          </div>
          <div className="flex items-center gap-2 flex-1 px-4 py-2.5">
            <MapPin size={18} className="text-navy/60 shrink-0" />
            <select
              className="w-full bg-transparent text-ink text-sm font-medium focus:outline-none"
              defaultValue="quartier"
              aria-label="Quartier"
            >
              <option value="quartier">Quartier</option>
              <option value="almadies">Almadies</option>
              <option value="ngor">Ngor</option>
              <option value="mermoz">Mermoz</option>
              <option value="plateau">Plateau</option>
              <option value="sacre-coeur">Sacré-Cœur</option>
            </select>
          </div>
          <a
            href="#biens"
            className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light transition-colors text-white font-semibold rounded-xl px-6 py-3 shrink-0"
          >
            <Search size={18} />
            <span>Rechercher</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
