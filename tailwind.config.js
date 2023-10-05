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
        light: {
          100: "#F5F5F5",
          200: "#F1F1F1",
          250: "#FFFAF4",
          300: "#FEEB09",
          400: "#F1EA3E",
          450: "#FFBB5C",
          500: "#00A2EA",
          600: "#000000",
        },
        background: {
          light: {
            100: "#F5F5F5",
            200: "#F1F1F1",
            250: "#FFFAF4",
            300: "#FEEB09",
            350: "#baceef",
            400: "#00A2EA",
          },
          dark: {
            100: "#F5F5F5",
            200: "#F1F1F1",
            250: "#FFFAF4",
            300: "#FEEB09",
            400: "#042d39",
          },
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

