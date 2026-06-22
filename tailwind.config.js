/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B2456', dark: '#131A3F', light: '#2A3470' },
        orange: { DEFAULT: '#E07B3C', vif: '#F08A3E', dark: '#C9692E' },
        cream: '#FAF8F4',
        ink: '#0F1330',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -15px rgba(15, 19, 48, 0.25)',
        card: '0 10px 30px -10px rgba(15, 19, 48, 0.15)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(180deg, rgba(19,26,63,0.2) 0%, rgba(19,26,63,0.85) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
