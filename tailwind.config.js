/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'enso-dark': '#00150f',
        'enso-green': '#00a859',
      }
    },
  },
  plugins: [],
}