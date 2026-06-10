/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background scale — deep navy, not pure black
        bg: '#0a0d14',
        surface: '#0f1420',
        surface2: '#141926',
        border: '#1e2535',
        borderHover: '#2a3448',

        // Text scale
        textPrimary: '#f0f2f7',
        textSecondary: '#8b93a8',
        textMuted: '#555e74',

        // Accent — Warm Gold
        gold: '#d4a843',
        goldLight: '#f0c860',
        goldDark: '#b8892e',
        goldMuted: '#d4a84320',

        // Secondary — Powder Blue / Sky
        skyBlue: '#93c5fd',
        skyBlueDark: '#60a5fa',
        skyBlueDeep: '#3b82f6',
        skyBlueMuted: '#93c5fd18',

        // Neutral whites
        snow: '#ffffff',
        ivory: '#f8f6f1',
        cream: '#edeade',

        // Legacy compat — kept for components not yet migrated
        black: '#0a0d14',
        white: '#f0f2f7',
        gray900: '#0f1420',
        gray800: '#141926',
        gray700: '#1e2535',
        gray500: '#555e74',
        gray400: '#8b93a8',
        gray300: '#bcc4d4',
        tealAccent: '#d4a843',
        tealLight: '#f0c860',
        tealDark: '#b8892e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
