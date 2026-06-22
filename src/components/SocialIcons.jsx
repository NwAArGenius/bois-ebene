// lucide-react n'inclut plus les logos de marques (politique anti-trademark).
// Icônes maison au même style "stroke" pour rester cohérent visuellement.

const base = {
  width: 17,
  height: 17,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8" />
      <path d="M12 16v-5a2 2 0 0 1 4 0v5" />
      <line x1="12" y1="11" x2="12" y2="16" />
    </svg>
  )
}
