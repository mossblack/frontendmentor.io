/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lexend Deca', 'sans-serif'],
        'shoulders': ['Big Shoulders Display', 'cursive'],
      }
    },
  },
  plugins: [],
}