/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/.index.html", ".//**/*.{html,php,js,css}"],
  theme: {
    extend: {
      colors:{ 
          primary: "#4d8eff",
      }
    },
  },
  plugins: [],
}

