const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        "blue-gray": colors.blueGray
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true
  }
};
