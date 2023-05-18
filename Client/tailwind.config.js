/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F2F4F8',
        'main': '#605DEC',
      },
      boxShadow: {
        '2xlBlue': '0 25px 50px -12px #A8BEEB',
      }
    },
  },
  plugins: [],
}

