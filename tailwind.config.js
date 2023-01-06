/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#642B73",
        secondary:"#c6426e",
      },
      fontFamily:{
        montserrat:["Montserrat, sans-serif"]
      }
    },
  },
  plugins: [],
}
