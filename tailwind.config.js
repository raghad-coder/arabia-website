/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      'enso-dark': '#01110a', // هذه الدرجة هي "الأخضر الملكي الغامق" الموجود في الفيديو
      'enso-green': '#00a859',
    }
  },
},
  plugins: [],
}