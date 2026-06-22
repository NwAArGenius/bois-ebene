import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { stats } from '../data/stats'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

function Counter({ valeur, suffixe }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [affiche, setAffiche] = useState(0)

  // Anime le compteur de 0 à sa valeur finale dès qu'il entre dans le viewport
  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, valeur, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setAffiche(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, valeur])

  return (
    <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-orange-vif">
      {affiche}
      {suffixe}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-navy py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center"
      >
        {stats.map((stat) => (
          <motion.div key={stat.id} variants={fadeUp} className="flex flex-col items-center gap-2">
            <Counter valeur={stat.valeur} suffixe={stat.suffixe} />
            <span className="text-white/70 text-sm md:text-base font-medium tracking-wide">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
