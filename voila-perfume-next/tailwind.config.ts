import { colors } from './src/styles/tokens';

/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        playfair: ['var(--font-playfair-display)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      fontSize: {
        'hero-heading-desktop': '64px',
        'hero-heading-mobile': '42px',
        'section-heading-desktop': '48px',
        'section-heading-mobile': '32px',
        'product-title-desktop': '28px',
        'product-title-mobile': '22px',
        'subheading-desktop': '16px',
        'subheading-mobile': '14px',
        'body-text-desktop': '18px',
        'body-text-mobile': '16px',
        'product-desc-desktop': '16px',
        'product-desc-mobile': '14px',
        'price-label-desktop': '20px',
        'price-label-mobile': '16px',
        'button-text-desktop': '14px',
        'button-text-mobile': '13px',
        'quote-desktop': '28px',
        'quote-mobile': '22px',
        'footer-small-desktop': '12px',
        'footer-small-mobile': '11px',
      },
      lineHeight: {
        'headlines': '1.1',
        'body': '1.6',
        'accent': '1.8',
      },
      letterSpacing: {
        'headlines': '0.5px',
        'all-caps': '1px',
        'normal': '0',
      },
      backgroundImage: {
        'obsidian-fade': 'radial-gradient(circle, #121212, #1F1F1F)',
      },
      css: {
        '--glow-gold': colors.glowGold,
        '--soft-lavender': colors.softLavender,
      },
    },
  },
  plugins: [],
};
