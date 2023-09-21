/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      },
      fontFamily: {
        signika: ['Signika', 'sans'], 
      },
      colors: {
        light : {
          100: '#F5F5F5',
          200: '#F1F1F1',
          250: '#FFFAF4',
          300: '#FEEB09',
          400: '#F1EA3E'
        },
        background: {
          light : {
            100: '#F5F5F5',
            200: '#F1F1F1',
            250: '#FFFAF4',
            300: '#FEEB09',
            400: '#00A2EA'
          },
        },
      },
    },
  },
  variants: {
    extend: {
      filter: ['responsive', 'hover', 'focus'],
      brightness: ['responsive', 'hover', 'focus'],
    }
  },
  plugins: [],
}

