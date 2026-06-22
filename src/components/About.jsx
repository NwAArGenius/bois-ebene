import { motion } from 'framer-motion'
import { ShieldCheck, Landmark, HeartHandshake, BadgeCheck } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'

const valeurs = [
  {
    icon: Landmark,
    titre: 'Connaissance fine du marché dakarois',
    description: 'Une expertise locale précise, quartier par quartier, bâtie sur le terrain depuis plus de 10 ans.',
  },
  {
    icon: ShieldCheck,
    titre: 'Transparence et rigueur',
    description: 'Des transactions menées avec sérieux juridique et une information claire à chaque étape.',
  },
  {
    icon: HeartHandshake,
    titre: 'Accompagnement humain',
    description: 'Un interlocuteur dédié qui vous écoute et défend vos intérêts, du premier contact à la signature.',
  },
  {
    icon: BadgeCheck,
    titre: 'Réseau qualifié',
    description: 'Un portefeuille d’acheteurs, de locataires et d’investisseurs sérieux, sénégalais et de la diaspora.',
  },
]

export default function About() {
  return (
    <section id="apropos" className="bg-cream py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80"
            alt="Intérieur élégant d'une propriété gérée par Bois d'Ébène"
            loading="lazy"
            className="rounded-2xl shadow-soft w-full h-[420px] object-cover"
          />
          <div className="hidden md:flex absolute -bottom-6 -right-6 bg-navy text-white rounded-2xl shadow-soft px-6 py-5 flex-col items-center">
            <span className="font-heading font-bold text-3xl text-orange-vif">10+</span>
            <span className="text-xs text-white/70 mt-1">ans à Dakar</span>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <span className="text-orange font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
              Pourquoi nous choisir
            </span>
            <h2 className="text-navy font-heading font-bold text-3xl md:text-4xl mt-3 mb-5">
              Une agence ancrée dans le marché immobilier sénégalais
            </h2>
            <p className="text-ink/60 mb-10">
              Bois d&apos;Ébène est née d&apos;une conviction simple : l&apos;immobilier à Dakar mérite le
              même niveau d&apos;exigence que les plus grandes places internationales. Nous combinons
              expertise locale et standards de service haut de gamme pour accompagner chaque projet,
              ici comme depuis la diaspora.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-6"
          >
            {valeurs.map(({ icon: Icon, titre, description }) => (
              <motion.li key={titre} variants={fadeUp} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-navy" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy">{titre}</h3>
                  <p className="text-ink/60 text-sm mt-1">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
