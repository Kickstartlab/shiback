/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      seagreen: {
        "50": "#F5F9FF",
        "100": "#03E6B6",
        "200": "#00CEEA",
      },
      blue: {
        "50": "#06071B",
      },
      white: {
        "100": "#fff",
      },
      pink: {
        "100": "#EF09DA",
      },
    },
    fontFamily: {
      'coolvetica': ["'Coolvetica', sans-serif;"],
      'inter': ["'Inter', sans-serif;"]
    }
  },
  plugins: [],
}
