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
          // ── Accent (orange) ─────────────────────────────────────
          purple:          '#E85D18',   // was #7668B6 — orange accent
          'purple-dark':   '#24160F',   // was #5C4E9C — deep brown (primary CTA bg)
          'purple-darker': '#2C180F',   // was #2D3559 — footer dark brown
          'purple-light':  '#F3E6D3',   // was #F0ECFF — warm beige tint
          'purple-muted':  '#B07A65',   // was #9A8DCC — warm muted
          // ── Highlight (golden yellow) ────────────────────────────
          yellow:          '#F6C945',   // was #F5A623
          'yellow-dark':   '#E8A800',   // was #D4891A
          'yellow-light':  '#FEF9E7',   // was #FEF3DC
        },
        neutral: {
          // ── Warm brown neutrals (replacing cool purple-tinted) ──
          900: '#24160F',   // primary text — deep warm brown
          800: '#3A1F10',
          700: '#5E4E43',   // secondary text
          600: '#7A6355',   // muted text
          500: '#9A8070',   // placeholder text
          400: '#C4A88F',   // light muted
          300: '#E5D7C8',   // border
          200: '#EFE5D5',   // divider
          100: '#F7F0E3',   // section background — warm cream
          50:  '#FFF8EE',   // surface — warm white
        },
      },
      fontFamily: {
        sans:    ['Inter',        'system-ui', 'sans-serif'],
        display: ['Inter Tight',  'Inter',     'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        // Editorial shadows — warm, neutral (no purple tint)
        card:         '0 10px 35px rgba(0,0,0,.08)',
        'card-hover': '0 20px 50px rgba(0,0,0,.12)',
        'card-lg':    '0 10px 35px rgba(0,0,0,.08)',
        glow:         '0 0 40px rgba(232,93,24,.15)',
        soft:         '0 2px 12px rgba(0,0,0,.05)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'float':      'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'tab-slide':  'tabSlide 0.25s ease-out forwards',
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
        // Warm editorial gradients
        'gradient-brand':  'linear-gradient(135deg, #24160F 0%, #E85D18 100%)',
        'gradient-hero':   'linear-gradient(135deg, #F7F0E3 0%, #F3E6D3 100%)',
        'gradient-cta':    'linear-gradient(135deg, #24160F 0%, #E85D18 60%, #F6C945 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #FFF8EE 0%, #F7F0E3 100%)',
      },
    },
  },
  plugins: [],
}
