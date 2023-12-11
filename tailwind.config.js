/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'epilogue' : [ 'Epilogue', 'sans-serif']
      },
      maxWidth: {
        'base': '1220px'
      },
      colors: {
        'primary': '#1E2827'
      }
    },
  },
  plugins: [],
}

