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
        "blue-gray": colors.blueGray,
        fuchsia: colors.fuchsia
      },
      boxShadow: {
        "inner-sm": "inset 3px 4px 5px rgba(0,0,0,0.5);",
        "inner-set": "inset 1px 1px 5px rgba(0,0,0,0.7);",
        cute: "0px 3px 5px rgba(0,0,0,0.5);"
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
