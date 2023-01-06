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
      },
      keyframes:{
        pulse:{
          "0%, 100%":{
            opacity:1
          },
          "50%":{
            opacity:0.5
          }
        }
      }
    },
  },
  plugins: [],
}
