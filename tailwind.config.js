/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Luxury Pink & Berry Palette
        rose: {
          DEFAULT: '#9E3D63', // PRIMARY DEEP ROSE
          dark: '#7D294B',
          vibrant: '#C94F78',
          light: '#E8A6B8',
          soft: '#F6DCE4',
        },
        berry: {
          DEFAULT: '#7D294B', // RICH BERRY
          dark: '#5C1D36',
          light: '#9E3D63',
        },
        vibrant: {
          DEFAULT: '#C94F78', // VIBRANT ROSE
        },
        blush: {
          DEFAULT: '#E8A6B8', // BLUSH PINK
          soft: '#F6DCE4', // SOFT BLUSH
        },
        ivory: {
          DEFAULT: '#FFF9F6', // WARM IVORY
          dark: '#F4ECE8',
        },
        plum: {
          DEFAULT: '#351D2B', // DEEP PLUM
          dark: '#24121C',
          light: '#4A283C',
        },
        taupe: {
          DEFAULT: '#D8C4C8', // SOFT TAUPE
          dark: '#BFA8AC',
        },
        champagne: {
          DEFAULT: '#B79555', // CHAMPAGNE ACCENT
          light: '#CBB075',
          dark: '#967839',
          glow: 'rgba(183, 149, 85, 0.25)',
        },
        // Legacy color tokens remapped for safety
        navy: {
          DEFAULT: '#351D2B',
          dark: '#24121C',
          light: '#7D294B',
        },
        charcoal: {
          DEFAULT: '#351D2B',
          light: '#4A283C',
        },
        white: '#FFFFFF',
        clay: {
          DEFAULT: '#9E3D63',
          light: '#C94F78',
        },
        softgrey: {
          DEFAULT: '#F6DCE4',
          dark: '#D8C4C8',
        },
        primary: '#9E3D63',
        'primary-dark': '#7D294B',
        secondary: '#C94F78',
        stone: '#D8C4C8',
        bg: '#FFF9F6',
        cream: '#FFF9F6',
        accent: '#B79555',
        'accent-gold': '#B79555',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(125, 41, 75, 0.08), 0 4px 15px rgba(158, 61, 99, 0.10)',
        'luxury-hover': '0 30px 60px -20px rgba(125, 41, 75, 0.16), 0 8px 30px rgba(201, 79, 120, 0.22)',
        'pink-glow': '0 0 25px rgba(201, 79, 120, 0.35)',
        'champagne-glow': '0 0 25px rgba(183, 149, 85, 0.35)',
        '3d-card': '0 20px 35px -10px rgba(53, 29, 43, 0.08), 0 0 1px rgba(158, 61, 99, 0.2)',
        '3d-hover': '0 30px 55px -12px rgba(53, 29, 43, 0.18), 0 10px 30px rgba(201, 79, 120, 0.25)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.00) translate(0, 0)' },
          '50%': { transform: 'scale(1.03) translate(-0.4%, -0.4%)' },
          '100%': { transform: 'scale(1.06) translate(0.4%, 0.4%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'ken-burns': 'ken-burns 14s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-gentle': 'float-gentle 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
