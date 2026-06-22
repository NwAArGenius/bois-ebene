import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../config'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={siteConfig.whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Bois d'Ébène sur WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-orange shadow-soft flex items-center justify-center text-white"
    >
      <span className="absolute inset-0 rounded-full bg-orange/50 animate-ping" />
      <MessageCircle size={26} className="relative z-10" />
    </motion.a>
  )
}
