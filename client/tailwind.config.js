/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#05445E",
        secondary: "#FDB750",
        tertiary: "#151030",
        "black-100": "#1C4670",
        "black-200": "#278AB0",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/mainbg.jpg')",
      },
    },
  },
  plugins: [],
};