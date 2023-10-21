/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      fontFamily: {
        signika: ["Signika", "sans"],
        lora: ["Lora", "serif"],
      },
      colors: {
        textcolor: {
          100: "#FFFFFF",
          150: "#F7F7F7",
          200: "#F2F2F2",
          250: "#B2B9C5",
          300: "#FAE920",
          350: "#FFCC42",
          400: "#02A1E9",
          450: "#4686F2",
          500: "#51A4D2",
          600: "#5D4638",
          650: "#545454",
          700: "#070707",
          750: "#000000",
        },
        background: {
          100: "#FFFFFF",
          150: "#F7F7F7",
          200: "#F2F2F2",
          250: "#B2B9C5",
          300: "#FAE920",
          350: "#FFCC42",
          400: "#02A1E9",
          450: "#4686F2",
          500: "#51A4D2",
          600: "#5D4638",
          650: "#545454",
          700: "#070707",
          750: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {
      filter: ["responsive", "hover", "focus"],
      brightness: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("daisyui")],
};

