/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // APPROVED EDITORIAL OLIVE & LINEN PALETTE
        olive: {
          DEFAULT: '#5F6B45', // PRIMARY OLIVE
          deep: '#3F4A32',    // DEEP OLIVE
          dark: '#293225',    // DARK OLIVE
          muted: '#7D8765',   // MUTED OLIVE
          sage: '#A8B09A',    // SAGE
          soft: '#E8ECDF',    // SOFT OLIVE TINT
          vibrant: '#5F6B45',
        },
        linen: {
          DEFAULT: '#F4EFE6', // LINEN
          light: '#FAF7F1',   // LIGHT LINEN
          dark: '#E8E1D5',    // DEEP LINEN
          border: '#D8D0C3',  // WARM TAUPE BORDER
        },
        sage: '#A8B09A',
        taupe: '#D8D0C3',
        champagne: {
          DEFAULT: '#B89A5A', // CHAMPAGNE ACCENT
          light: '#D4BC82',
          dark: '#967839',
          glow: 'rgba(184, 154, 90, 0.25)',
        },
        charcoal: '#252822',
        
        // Remap legacy color tokens to Olive + Linen palette for safety
        rose: {
          DEFAULT: '#5F6B45',
          dark: '#3F4A32',
          vibrant: '#5F6B45',
          light: '#A8B09A',
          soft: '#E8ECDF',
        },
        berry: {
          DEFAULT: '#3F4A32',
          dark: '#293225',
          light: '#5F6B45',
        },
        vibrant: {
          DEFAULT: '#5F6B45',
        },
        blush: {
          DEFAULT: '#A8B09A',
          soft: '#E8ECDF',
        },
        ivory: {
          DEFAULT: '#FAF7F1',
          dark: '#F4EFE6',
        },
        plum: {
          DEFAULT: '#293225',
          dark: '#252822',
          light: '#3F4A32',
        },
        navy: {
          DEFAULT: '#293225',
          dark: '#252822',
          light: '#3F4A32',
        },
        white: '#FFFFFF',
        clay: {
          DEFAULT: '#5F6B45',
          light: '#7D8765',
        },
        softgrey: {
          DEFAULT: '#E8ECDF',
          dark: '#D8D0C3',
        },
        primary: '#5F6B45',
        'primary-dark': '#3F4A32',
        secondary: '#3F4A32',
        stone: '#D8D0C3',
        bg: '#F4EFE6',
        cream: '#F4EFE6',
        accent: '#B89A5A',
        'accent-gold': '#B89A5A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(41, 50, 37, 0.10), 0 4px 15px rgba(95, 107, 69, 0.08)',
        'luxury-hover': '0 30px 60px -20px rgba(41, 50, 37, 0.20), 0 8px 30px rgba(95, 107, 69, 0.25)',
        'champagne-glow': '0 0 25px rgba(184, 154, 90, 0.35)',
        '3d-card': '0 20px 35px -10px rgba(41, 50, 37, 0.08), 0 0 1px rgba(95, 107, 69, 0.2)',
        '3d-hover': '0 30px 55px -12px rgba(41, 50, 37, 0.18), 0 10px 30px rgba(95, 107, 69, 0.25)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.00) translate(0, 0)' },
          '50%': { transform: 'scale(1.03) translate(-0.4%, -0.4%)' },
          '100%': { transform: 'scale(1.05) translate(0.4%, 0.4%)' },
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
