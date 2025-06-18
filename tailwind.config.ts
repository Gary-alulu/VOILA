import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'light-bg': '#F8F5F0',
        'light-bg-alt': '#FFFFFF',
        'dark-bg': '#1A1A1A',
        'dark-bg-alt': '#262626',
        'accent-purple': '#8A2BE2',
        'accent-pink': '#FF69B4',
        'accent-gold': '#FFD700',
        'border-glow-light': 'rgba(255, 215, 0, 0.5)',
        'border-glow-dark': 'rgba(138, 43, 226, 0.5)',
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
    },
  },
  plugins: [],
};

export default config;