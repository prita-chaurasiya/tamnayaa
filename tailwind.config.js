/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Luxury Color Palette
        navy: {
          DEFAULT: '#17242D', // MIDNIGHT NAVY
          dark: '#0F171E',
          light: '#223440',
        },
        charcoal: {
          DEFAULT: '#202B31', // DEEP CHARCOAL
          light: '#2B3840',
        },
        ivory: {
          DEFAULT: '#F7F4EE', // WARM IVORY
          light: '#FDFBF7',
          dark: '#EBE6DC',
        },
        white: '#FFFFFF',
        champagne: {
          DEFAULT: '#B79657', // CHAMPAGNE ACCENT
          light: '#C9A96B',
          dark: '#9F7E41',
          glow: 'rgba(183, 150, 87, 0.25)',
        },
        taupe: {
          DEFAULT: '#D8CEC0', // WARM TAUPE
          light: '#E6DFC8',
          dark: '#C4B7A5',
        },
        clay: {
          DEFAULT: '#A97868', // MUTED CLAY
          light: '#B98979',
        },
        softgrey: {
          DEFAULT: '#E8E5DF', // SOFT GREY
          dark: '#D5D1C7',
        },
        // Mapped legacy color tokens for safety
        primary: '#17242D',
        'primary-dark': '#202B31',
        secondary: '#A97868',
        stone: '#E8E5DF',
        bg: '#F7F4EE',
        cream: '#FFFFFF',
        accent: '#B79657',
        'accent-gold': '#B79657',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(23, 36, 45, 0.07), 0 4px 15px rgba(183, 150, 87, 0.08)',
        'luxury-hover': '0 30px 60px -20px rgba(23, 36, 45, 0.14), 0 8px 30px rgba(183, 150, 87, 0.18)',
        'champagne-glow': '0 0 25px rgba(183, 150, 87, 0.3)',
        '3d-card': '0 20px 35px -10px rgba(23, 36, 45, 0.08), 0 0 1px rgba(183, 150, 87, 0.2)',
        '3d-hover': '0 30px 55px -12px rgba(23, 36, 45, 0.16), 0 10px 30px rgba(183, 150, 87, 0.2)',
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
