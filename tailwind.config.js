/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7668B6',
          'purple-dark': '#5C4E9C',
          'purple-darker': '#2D3559',
          'purple-light': '#F5F4FC',
          'purple-muted': '#9A8DCC',
},
        // brand: {
        //   purple: '#8068f9',
        //   'purple-dark': '#5238D4',
        //   'purple-darker': '#745ceb',
        //   'purple-light': '#EDE9FF',
        //   'purple-muted': '#A08EFF',
        //   yellow: '#F5A623',
        //   'yellow-light': '#FEF3DC',
        // },
        neutral: {
          900: '#1A1A2E',
          800: '#2D2D4A',
          700: '#3D3D5C',
          600: '#4A4A6A',
          500: '#6B6B8D',
          400: '#9898B5',
          300: '#C4C4D8',
          200: '#E5E5F0',
          100: '#F4F4FA',
          50:  '#F8F8FC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(107, 78, 255, 0.08)',
        'card-hover': '0 8px 40px rgba(107, 78, 255, 0.18)',
        glow: '0 0 40px rgba(107, 78, 255, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6B4EFF 0%, #5238D4 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F4F4FA 0%, #EDE9FF 100%)',
        'gradient-cta': 'linear-gradient(135deg, #5238D4 0%, #6B4EFF 60%, #A08EFF 100%)',
      },
    },
  },
  plugins: [],
}
