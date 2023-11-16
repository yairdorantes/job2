/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chrismas: ["Mountains of Christmas", "serif"],
        Titles: ["Fjalla One", "sans-serif"],
        Paragraph: ["Roboto", "sans-serif"],
        Classic: ["Christmas Classica", "sans-serif"],
        cursive: ["Dancing Script", "cursive"],
        cinzel: ["Cinzel Decorative", "serif"],
      },
    },
  },
  daisyui: {
    themes: ["dark", "garden", "dim", "night"],
  },
  plugins: [require("daisyui")],
};
