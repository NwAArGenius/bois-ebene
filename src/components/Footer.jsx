import { siteConfig } from '../config'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg viewBox="0 0 64 64" className="w-7 h-7" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#FAF8F4" />
              <path d="M32 14 L48 24 V42 L32 50 L16 42 V24 Z" fill="none" stroke="#E07B3C" strokeWidth="3" />
              <circle cx="32" cy="32" r="6" fill="#E07B3C" />
            </svg>
            <span className="font-heading font-bold text-white text-lg">Bois d&apos;Ébène</span>
          </div>
          <p className="text-sm leading-relaxed">
            Agence immobilière de prestige à Dakar : vente, location, gestion locative et conseil
            en investissement.
          </p>
        </div>

        <div>
          <h3 className="text-white font-heading font-semibold mb-4 text-sm tracking-wide uppercase">
            Liens rapides
          </h3>
          <ul className="space-y-2 text-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-orange-vif transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-heading font-semibold mb-4 text-sm tracking-wide uppercase">
            Coordonnées
          </h3>
          <ul className="space-y-2 text-sm">
            <li>{siteConfig.address}</li>
            <li>
              <a href={`tel:${siteConfig.whatsappNumber}`} className="hover:text-orange-vif transition-colors">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.mailtoLink()} className="hover:text-orange-vif transition-colors">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-heading font-semibold mb-4 text-sm tracking-wide uppercase">
            Suivez-nous
          </h3>
          <div className="flex gap-3">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>© 2026 Agence Immobilière Bois d&apos;Ébène. Tous droits réservés.</p>
        <a href="#accueil" className="hover:text-orange-vif transition-colors">
          Mentions légales
        </a>
      </div>
    </footer>
  )
}
