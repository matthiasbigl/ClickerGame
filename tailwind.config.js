/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground': '#CBF1F5',
        'foreground-dark': '#A6E3E9',
        'foreground-darker': '#71C9CE',
        'highlight': '#FFD369',
      }
    },

  },
  plugins: [],

}
