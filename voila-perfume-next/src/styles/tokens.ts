// Color Tokens
export const colors = {
  'light-bg': '#FFFFFF',
  'dark-bg': '#1A1A1A',
  'text-primary-light': '#333333',
  'text-primary-dark': '#E0E0E0',
  'brand-primary-light': '#FF6B6B',
  'brand-primary-dark': '#CC3333',
  'brand-secondary-light': '#4ECDC4',
  'brand-secondary-dark': '#2A8D86',

  // Border Colors
  'border-light': '#E0E0E0',
  'border-dark': '#444444',

  // Interactive States (e.g., buttons, links)
  'interactive-default-light': '#007BFF',
  'interactive-default-dark': '#66B2FF',
  'interactive-hover-light': '#0056B3',
  'interactive-hover-dark': '#3399FF',

  // Status Colors
  'success-light': '#28A745',
  'success-dark': '#4CAF50',
  'error-light': '#DC3545',
  'error-dark': '#F44336',
  'warning-light': '#FFC107',
  'warning-dark': '#FFEB3B',
};

export const typography = {
  fontFamilies: {
    playfair: ['Playfair Display', 'serif'],
    inter: ['Inter', 'sans-serif'],
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    // Add more font sizes as needed
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

// Spacing Tokens (based on a 4px or 8px grid)
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
  40: '10rem', // 160px
  48: '12rem', // 192px
  56: '14rem', // 224px
  64: '16rem', // 256px,
  // Add more spacing as needed
};

// Animation Tokens
export const animations = {
  durations: {
    short: '150ms',
    medium: '300ms',
    long: '500ms',
  },
  easings: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  // Add more animation properties as needed
};