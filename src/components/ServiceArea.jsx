import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { siteConfig } from '../config'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

// Positions décoratives (en %) pour disperser les pins sur la carte stylisée — purement esthétique
const pins = [
  { label: 'Almadies', top: '22%', left: '18%' },
  { label: 'Ngor', top: '12%', left: '30%' },
  { label: 'Mermoz', top: '38%', left: '48%' },
  { label: 'Sacré-Cœur', top: '52%', left: '38%' },
  { label: 'Plateau', top: '68%', left: '62%' },
  { label: 'Point E', top: '46%', left: '64%' },
]

export default function ServiceArea() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-orange font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
            Zone d&apos;intervention
          </span>
          <h2 className="text-navy font-heading font-bold text-3xl md:text-4xl mt-3 mb-5">
            Présents dans les quartiers les plus prisés de Dakar
          </h2>
          <p className="text-ink/60 mb-8">
            Notre connaissance du terrain couvre l&apos;ensemble de la presqu&apos;île dakaroise, des
            quartiers résidentiels aux zones d&apos;expansion en périphérie.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            {siteConfig.zonesCouvertes.map((zone) => (
              <motion.span
                key={zone}
                variants={fadeUp}
                className="inline-flex items-center gap-1.5 bg-white border border-navy/10 text-navy text-sm font-medium px-4 py-2 rounded-full shadow-card"
              >
                <MapPin size={14} className="text-orange" />
                {zone}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Carte stylisée — décorative, sans dépendance à une API cartographique */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative h-[380px] md:h-[440px] rounded-2xl overflow-hidden bg-navy shadow-soft"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle, #FAF8F4 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-light/40 via-transparent to-navy-dark/60" />

          {pins.map((pin, i) => (
            <motion.div
              key={pin.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.15 * i, duration: 0.4 }}
              className="absolute flex flex-col items-center"
              style={{ top: pin.top, left: pin.left }}
            >
              <span className="relative flex items-center justify-center">
                <span className="absolute w-6 h-6 rounded-full bg-orange/40 animate-ping" />
                <MapPin size={22} className="text-orange-vif fill-orange-vif/20 relative z-10" />
              </span>
              <span className="mt-1 text-white text-xs font-medium bg-navy-dark/70 px-2 py-0.5 rounded-full whitespace-nowrap">
                {pin.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
