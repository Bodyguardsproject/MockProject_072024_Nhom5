/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D2A52E",
        "global-color-primary": "#E3C472",
        "global-color-text": "#3B3A3A",
      },
      boxShadow: {
        yellow: "0px 0px 9px 2px #D2A52E",
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
