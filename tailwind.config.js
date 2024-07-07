/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      teal: '#020202',
      back: '#295684',
      button: '#A9A9A9',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transition-all': {
          transitionProperty: 'all',
          transitionDuration: '300ms',
          transitionTimingFunction: 'ease',
        },
      };
      addUtilities(newUtilities, ['hover']);
    },
  ],
};
