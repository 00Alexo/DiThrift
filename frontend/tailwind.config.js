/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New gold/gray/black palette
        gold: "#D4AF37",
        goldLight: "#F1D78C",
        goldDark: "#AA8C2C",
        gray: "#808080",
        grayLight: "#C0C0C0",
        grayDark: "#404040",
        black: "#000000",
        blackSoft: "#1A1A1A",
      },
      keyframes: {

      },
      animation: {
      },
    },
  },
  darkMode: "class",
  plugins: [],
};