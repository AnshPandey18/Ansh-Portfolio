/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Inter', 'sans-serif'],
      },
      colors: {
        bg:       '#0A0A0F',
        surface:  '#0f0f17',
        surface2: '#14141f',
        gold:     '#D4A24E',
        goldLight:'#f0c060',
        goldDark: '#a87830',
        sky:      '#7eb8f7',
        skyDark:  '#4d9ef5',
        purple:   '#7c3aed',
      },
      animation: {
        'float':       'floatY 7s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':   'spin 12s linear infinite',
        'marquee':     'marqueeScroll 28s linear infinite',
      },
    },
  },
  plugins: [],
}
