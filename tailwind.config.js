/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Bebas Neue', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'gold': "url('/goldbg.jpg')",
        'gold2': "url('/goldbg2.jpg')",
      },
    },
  },
  plugins: [],
}
