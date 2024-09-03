// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example custom color
        secondary: '#F59E0B', // Example custom color
      },
      fontFamily: {
        header: ['"Roboto"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      spacing: {
        128: '32rem', // Example custom spacing
      },
    },
  },
  variants: {},

  plugins: [],
}
