import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { siteConfig } from '../config'
import { fadeUp, viewportOnce } from '../utils/animations'

export default function ContactCTA() {
  const [nom, setNom] = useState('')
  const [message, setMessage] = useState('')

  // Pas de backend : on construit un message WhatsApp pré-rempli et on ouvre wa.me
  const envoyerSurWhatsApp = (e) => {
    e.preventDefault()
    const texte = `Bonjour, je suis ${nom || 'un visiteur du site'}.\n${
      message || "Je souhaite obtenir plus d'informations sur vos services."
    }`
    window.open(siteConfig.whatsappLink(texte), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-orange-vif font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
            Contact
          </span>
          <h2 className="text-white font-heading font-bold text-3xl md:text-4xl mt-3 mb-5">
            Parlons de votre projet immobilier
          </h2>
          <p className="text-white/70 mb-9 max-w-md">
            Que vous souhaitiez vendre, louer, investir ou simplement obtenir un conseil, notre
            équipe vous répond rapidement et avec attention.
          </p>

          <div className="space-y-4 mb-9">
            <a
              href={siteConfig.whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark transition-colors text-white font-semibold rounded-full px-6 py-3 shadow-soft"
            >
              <MessageCircle size={18} />
              Discuter sur WhatsApp
            </a>
          </div>

          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-orange-vif" />
              <a href={`tel:${siteConfig.whatsappNumber}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-orange-vif" />
              <a href={siteConfig.mailtoLink()} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-orange-vif" />
              {siteConfig.address}
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0.1}
          onSubmit={envoyerSurWhatsApp}
          className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-7 md:p-8 space-y-5"
        >
          <div>
            <label htmlFor="nom" className="block text-white/70 text-sm font-medium mb-1.5">
              Nom complet
            </label>
            <input
              id="nom"
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Votre nom"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-orange"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-1.5">
              Votre projet
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Décrivez votre projet immobilier (achat, vente, location, investissement...)"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-orange resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark transition-colors text-white font-semibold rounded-xl px-6 py-3"
          >
            <Send size={17} />
            Envoyer via WhatsApp
          </button>

          <p className="text-white/40 text-xs text-center">
            En envoyant ce formulaire, vous serez redirigé vers WhatsApp avec votre message
            pré-rempli.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
