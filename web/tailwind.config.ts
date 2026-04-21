import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // White + teal-green framing palette
        ink: '#1F2937',
        mute: '#6B7280',
        line: '#E5E7EB',
        teal: {
          50: '#F1FAF9',
          100: '#DDF2F0',
          200: '#B8E3DF',
          300: '#86CFC9',
          400: '#4FB3B0',
          500: '#2A9A97',
          600: '#128180',
          700: '#0E6A6A',
          800: '#0B5454',
          900: '#083F3F',
        },
        gold: '#C9A14A',
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          '2xl': '1200px',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config;
