import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        'off-white': '#F8F8F8',
        'charcoal-black': '#333333',
        'warm-gray': '#666666',
        'cream-white': '#F5F5DC',
        'soft-golden-beige': '#D4AF37',
        'rose-gold': '#B76E79',
        'blush-purple': '#C79FEF',
        'muted-gold': '#D4AF37',
        'blush-pink': '#FFC0CB',
        'light-bg': '#F8F5F0',
        'light-bg-alt': '#FFFFFF',
        'dark-bg': '#1A1A1A',
        'dark-bg-alt': '#262626',
        'accent-purple': '#8A2BE2',
        'accent-pink': '#FF69B4',
        'accent-gold': '#FFD700',
        'royal-purple': '#6A0DAD',
        'soft-gold': '#D4AF37',
        'rose-glow': '#FF007F',
        'muted-gold': '#B8860B',
        'dark-gradient-start': '#0b0b0b',
        'dark-gradient-end': '#1a1a1a',
        'shimmer-light': 'rgba(255, 255, 255, 0.1)',
        'shimmer-dark': 'rgba(0, 0, 0, 0.1)',
        'glow-start': 'rgba(255, 215, 0, 0.3)',
        'glow-end': 'rgba(255, 215, 0, 0.05)',
        'border-glow-light': 'rgba(255, 215, 0, 0.5)',
        'border-glow-dark': 'rgba(138, 43, 226, 0.5)',
        'soft-white': '#F8F8F8',
        'off-black': '#121212',
        'warm-neutral': '#D2B48C',
        'soft-amber': '#FFBF00',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBrands: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scroll-brands': 'scrollBrands 30s linear infinite',
      },
      backgroundAttachment: {
        'parallax': 'fixed',
      }
    },
  },
  plugins: [],
};

export default config;