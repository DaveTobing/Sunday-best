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
        sigika: ['Sigika', 'sans'], 
      },
      colors: {
        light : {
          100: '#F5F5F5',
          200: '#F1F1F1',
          300: '#FEEB09',
          400: '#F1EA3E'
        },
        dark: {
          100 : '#D9D9D9', 
          200 : '#A5C9CA',
          300 : '#395B64',
          350 : '#416772',
          400 : '#2C3333'
        },
        background: {
          light : {
            100: '#F5F5F5',
            200: '#F1F1F1',
            300: '#FEEB09',
            400: '#00A2EA'
          },
          dark: {
            100 : '#D9D9D9', 
            200 : '#A5C9CA',
            300 : '#395B64',
            350 : '#416772',
            400 : '#2C3333'
          }
        },
        primary: {
          100: '#CEEFDB',
          200: '#9CCCAF',
          300: '#7BA88D'
        },
        secondary: {
          100: '#E3D7FF',
          200: '#D1CEF8',
          300: '#BFB3F1'
        },
        accent: {
          100: '#FFC8C8',
          200: '#FF7B7B',
          300: '#FF2E2E'
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

