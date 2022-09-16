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
      ,keyframes: {
        click: {
          "0%,100%": { transform: "scale(1.1)",

          },
          "50%": { transform: "scale(1.05)" },
        }
      },
      animation: {
        click: "click 150ms ease-in-out",
      }
    },

  },
  plugins: [],

}
