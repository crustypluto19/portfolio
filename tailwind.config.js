/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-work-sans)']
      },
      height: {
        'half-screen': '50vh',
      },
      width: {
        'half-screen': '50vw',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  darkMode: 'class',
}
