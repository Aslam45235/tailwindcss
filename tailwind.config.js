/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Inter Tight", "serif"],
      },
      screens: {
        xs: "320px", // Custom breakpoint for 320px screens
        "sm-md": "425px", // Custom breakpoint for 425px+
      },
    },
  },
  plugins: [],
};


