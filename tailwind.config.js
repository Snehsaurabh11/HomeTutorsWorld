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
          purple:        '#7668B6',
          'purple-dark':  '#5C4E9C',
          'purple-darker':'#2D3559',
          'purple-light': '#F0ECFF',
          'purple-muted': '#9A8DCC',
          yellow:         '#F5A623',
          'yellow-dark':  '#D4891A',
          'yellow-light': '#FEF3DC',
        },
        neutral: {
          900: '#1A1A2E',
          800: '#2D2D4A',
          700: '#3D3D5C',
          600: '#4A4A6A',
          500: '#6B6B8D',
          400: '#9898B5',
          300: '#C4C4D8',
          200: '#E8E8F0',
          100: '#F4F4FA',
          50:  '#FAF9FF',
        },
      },
      fontFamily: {
        sans:    ['Inter',  'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter',    'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card:         '0 2px 16px rgba(118, 104, 182, 0.08)',
        'card-hover': '0 8px 32px rgba(118, 104, 182, 0.18)',
        'card-lg':    '0 4px 32px rgba(118, 104, 182, 0.12)',
        glow:         '0 0 40px rgba(118, 104, 182, 0.22)',
        soft:         '0 1px 8px rgba(118, 104, 182, 0.06)',
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.6s ease-out forwards',
        'fade-in':     'fadeIn 0.4s ease-out forwards',
        'float':       'float 3s ease-in-out infinite',
        'pulse-soft':  'pulseSoft 2s ease-in-out infinite',
        'tab-slide':   'tabSlide 0.25s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        tabSlide: {
          '0%':   { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-brand':  'linear-gradient(135deg, #7668B6 0%, #5C4E9C 100%)',
        'gradient-hero':   'linear-gradient(135deg, #faf9ff 0%, #f0ecff 100%)',
        'gradient-cta':    'linear-gradient(135deg, #5C4E9C 0%, #7668B6 60%, #9A8DCC 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #f6f3ff 0%, #f0ecff 100%)',
      },
    },
  },
  plugins: [],
}
