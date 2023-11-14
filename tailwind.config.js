/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        chrismas:['Mountains of Christmas', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
};
