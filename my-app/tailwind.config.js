/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
      'auto-auto': 'auto auto'  
      },
      colors: {
        'very-l-grey': '#FAFAFA'
      },
      fontFamily: {
        'Nunito': ['Nunito sans', 'sans-serif'],
        'Rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}