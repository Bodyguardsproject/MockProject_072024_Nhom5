/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FFD24A",
        "global-color-primary": "#E3C472",
        "global-color-text": "#3B3A3A",

        "text-admin":"#565D6D",
        "background-button":"#F7BC23",
        "background-button-second":"#FF604A"

      },
      boxShadow: {
        yellow: "0px 0px 9px 2px #D2A52E",
      },
      padding: {
        "padding-left": "0.75rem",
        "padding-right": "0.75rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(-100)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s linear",
      },
      screens: {
        'xs': '375px', // Thêm breakpoint mới
       
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")], 
};
