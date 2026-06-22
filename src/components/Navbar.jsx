import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config'

function Logo({ light }) {
  return (
    <a href="#accueil" className="flex items-center gap-2 shrink-0">
      <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={light ? '#FAF8F4' : '#1B2456'} />
        <path d="M32 14 L48 24 V42 L32 50 L16 42 V24 Z" fill="none" stroke="#E07B3C" strokeWidth="3" />
        <circle cx="32" cy="32" r="6" fill="#E07B3C" />
      </svg>
      <span className={`font-heading font-bold text-lg tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        Bois d&apos;Ébène
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // La navbar passe en mode "glassy navy" dès que l'utilisateur quitte le haut du hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/80 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Logo light />

        <ul className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-underline text-white/90 hover:text-white font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-orange hover:bg-orange-dark transition-colors text-white font-semibold text-sm px-5 py-2.5 shadow-card"
        >
          Nous contacter
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-navy-dark/95 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white/90 hover:text-orange font-medium py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center rounded-full bg-orange text-white font-semibold text-sm px-5 py-2.5 mt-1"
                >
                  Nous contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
