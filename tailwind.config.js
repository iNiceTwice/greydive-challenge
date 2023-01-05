/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#509999",
        secondary:"#F36B21",
        dark:"#1A1919"
      },
      fontFamily:{
        montserrat:["Montserrat, sans-serif"]
      }
    },
  },
  plugins: [],
}
