/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif']
      },
      colors: {
        'Light-red': '#ff5757',
        'Orangey-yellow': '#ffb01f',
        'Green-teal': '#00bd91',
        'Cobalt-blue': '#1125d4',
        'Light-slate-blue': '	#7857ff',
        'Light-royal-blue': '#2e2be9',
        'Violet-blue': '#4e21ca',
        'Pale-blue': '#ebf1ff',
        'Light-lavender': '#c8c7ff',
        'Dark-gray-blue': '#303b5a',
        'Persian-blue': '#2421ca',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}

