/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#3A3A3A",
        grey: "#E8E8E8",
        white: "#FFFFFF",
        green: "#7ADF56",
        red: "#DF567A",
        orange: "#DF7756",
      },
    },
  },
  plugins: [],
};
