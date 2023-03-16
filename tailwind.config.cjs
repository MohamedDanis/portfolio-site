/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    fontFamily: {
      tanohe: ["TanoheSansRegular","sans-serif"],
      enigmat:["Enigmatic","sans-serif"]
    },
    container: {
      padding:{
        DEFAULT: '1rem',
        sm:'5rem',
        md: '10rem',
      },
     
    },
    extend: {
      colors: {
        'ground':'#D9D2C5',
        'primeblu':'#363B59'
      },
    },
  },
  plugins: [require("daisyui")],
}
