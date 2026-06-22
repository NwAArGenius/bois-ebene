import { motion } from 'framer-motion'
import { services } from '../data/services'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-orange font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
            Nos Services
          </span>
          <h2 className="text-navy font-heading font-bold text-3xl md:text-4xl mt-3">
            Un accompagnement complet, à chaque étape
          </h2>
          <p className="text-ink/60 mt-4">
            De la première estimation à la signature finale, notre équipe vous accompagne avec
            rigueur et discrétion.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, titre, description }) => (
            <motion.div
              key={titre}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl p-7 shadow-card border border-navy/5"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                <Icon size={24} className="text-orange" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-2">{titre}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
