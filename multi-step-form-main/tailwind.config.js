/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        'sidebar-pattern': 'url(/images/bg-sidebar-desktop.svg)',
      },
      colors: {
        'main-marine-blue': '#02295a',
        'main-purplish-blue': '#473dff',
        'main-pastel-blue': '#adbeff',
        'main-light-blue': '#bfe2fd',
        'main-strawberry-red': '#ed3548',
        'main-cool-gray': '#9699ab',
        'main-light-gray': '#d6d9e6',
        'main-magnolia': '#f0f6ff',
        'main-alabaster': '#fafbff',
      }
    },
  },
  plugins: [],
}

