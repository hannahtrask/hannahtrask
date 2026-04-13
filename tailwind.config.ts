import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        miroa: ['var(--font-miroa)'],
        'first-rodeo': ['var(--font-first-rodeo)'],
        sans: ['var(--font-montserrat)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        graphite: '#33352a',
        brand: {
          brown: '#c56f53',
          olive: '#8c7e49',
          sage: '#8799a7',
          sand: '#ecd9b9',
        },
        desert: {
          50: '#f7efe1',
          100: '#ecd9b9',
          200: '#e2c9a1',
          300: '#d7b587',
          400: '#f09664',
          500: '#c56f53',
          600: '#8799a7',
          700: '#8c7e49',
          800: '#33352a',
          900: '#33352a',
          950: '#23251d',
        },
        sand: {
          50: '#fff8ee',
          100: '#f7efe1',
          200: '#ecd9b9',
          300: '#e2c9a1',
          400: '#d7b587',
          500: '#c56f53',
          600: '#a75f47',
          700: '#8c7e49',
          800: '#6f643a',
          900: '#33352a',
        },
        sage: {
          50: '#eef2f5',
          100: '#dbe3e9',
          200: '#c1cdd7',
          300: '#a8b8c5',
          400: '#98aab9',
          500: '#8799a7',
          600: '#6f7f8d',
          700: '#5a6772',
          800: '#444f57',
          900: '#33352a',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          // @ts-ignore
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          // @ts-ignore
          to: { height: 0 },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scroll-banner': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in-up': 'slide-in-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scroll-banner': 'scroll-banner 50s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
