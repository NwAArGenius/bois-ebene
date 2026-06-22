import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { fadeUp, viewportOnce } from '../utils/animations'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const suivant = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  const precedent = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  // Défilement automatique, mis en pause au survol pour laisser le temps de lire
  useEffect(() => {
    if (paused) return
    const timer = setInterval(suivant, 6000)
    return () => clearInterval(timer)
  }, [paused, suivant])

  const avis = testimonials[index]

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-orange font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
            Témoignages
          </span>
          <h2 className="text-navy font-heading font-bold text-3xl md:text-4xl mt-3">
            Ce que disent nos clients
          </h2>
        </motion.div>

        <div
          className="relative bg-cream rounded-2xl shadow-card px-6 sm:px-12 py-12 min-h-[280px] flex items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute top-7 left-7 text-orange/20" size={48} aria-hidden="true" />

          <AnimatePresence mode="wait">
            <motion.div
              key={avis.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative z-10 text-center w-full"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: avis.note }).map((_, i) => (
                  <Star key={i} size={16} className="fill-orange text-orange" />
                ))}
              </div>

              <p className="text-ink/80 text-lg leading-relaxed font-medium mb-7">
                « {avis.citation} »
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-heading font-semibold text-sm">
                  {avis.initiales}
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-navy text-sm">{avis.nom}</p>
                  <p className="text-ink/50 text-xs">{avis.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={precedent}
            aria-label="Témoignage précédent"
            className="w-10 h-10 rounded-full border border-navy/15 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Voir le témoignage de ${t.nom}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-orange' : 'bg-navy/15'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={suivant}
            aria-label="Témoignage suivant"
            className="w-10 h-10 rounded-full border border-navy/15 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
