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
        cormorant: ['var(--font-cormorant-garamond)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        dmsans: ['var(--font-dm-sans)', 'sans-serif'],
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
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
        '48': '192px',
        '56': '224px',
        '64': '256px',
      },
      boxShadow: {
        'soft-glow': '0 0 15px rgba(212, 175, 55, 0.4)',
        'card-hover': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'glass-effect': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      transitionDuration: {
        'DEFAULT': '300ms',
        'fast': '150ms',
        'medium': '300ms',
        'slow': '500ms',
      },
      glassmorphism: {
        'background': 'rgba(255, 255, 255, 0.1)',
        'backdrop-filter': 'blur(10px)',
        'border': '1px solid rgba(255, 255, 255, 0.18)',
        'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
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
