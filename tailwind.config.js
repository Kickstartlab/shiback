/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      seagreen: {
        "50": "#F4F5FA",
      },
      blue: {
        "50": "#1F33D8",
        "100": "#0E133A",
        "200": "#13316B",
      },
      white: {
        "100": "#fff",
      },
      yellow: {
        "50": "#FFD556",
        "100": "#F9B208",
      },
    },
    fontFamily: {
      'montserat': ["'Montserrat', sans-serif;"],
      'inter': ["'Inter', sans-serif;"]
    }
  },
  plugins: [],
}
