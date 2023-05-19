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
        'darker-main': '#514FBC',
      },
      boxShadow: {
        '2xlBlack': '0 25px 50px -12px #3D4D56',
      }
    },
  },
  plugins: [require("daisyui"), 
  require('tailwind-scrollbar')],
   daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

