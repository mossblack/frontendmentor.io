/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'Dark-cyan': '#3c8067',
        'Cream': '#f2ebe3',
        'Very-dark-blue': '#1c232b',
        'Dark-grayish-blue': '	#6c7289',
      },
    },
  },
  plugins: [],
}

