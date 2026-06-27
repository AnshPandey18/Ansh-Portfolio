/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        lime:       '#a3e635',
        carbon:     '#000000',
        paper:      '#ffffff',
        graphite:   '#171717',
        'shadow-ink':'#0a0a0d',
        fog:        '#f5f5f5',
        steel:      '#737373',
        iron:       '#222222',
        slate:      '#333333',
        buttercream:'#fef3c8',
        'mint-wash': '#d2fae5',
        'lilac-mist':'#fae9ff',
        bubblegum:  '#f5d1fe',
        'amber-spark':'#fbbf25',
        'sky-wash':  '#b7eaf6',
        cobalt:     '#3366e0',
        meadow:     '#b9f0c0',
      },
      borderRadius: {
        pill: '100px',
        card: '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        sticker:  'rgb(10,10,13) 2px 2px 0px 0px',
        sticker2: 'rgb(10,10,13) 4px 4px 0px 0px',
        sticker3: 'rgb(10,10,13) 1px 1px 0px 0px',
        sticker4: 'rgb(23,23,23) 4px 4px 0px 0px',
      },
      letterSpacing: {
        'display-xl': '-1.344px',
        display:      '-0.96px',
        'heading-lg': '-0.32px',
        heading:      '-0.216px',
        'heading-sm': '-0.12px',
        subheading:   '-0.108px',
        body:         '-0.096px',
        'body-sm':    '-0.14px',
        caption:      '-0.252px',
      },
    },
  },
  plugins: [],
}
