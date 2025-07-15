import { colors } from './src/styles/tokens';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ... other configurations
  theme: {
    extend: {
      colors: {
        ...colors, // This is where your semantic colors are integrated
      },
      // ... other theme extensions
    },
  },
  // ... plugins
};
