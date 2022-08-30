/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      lg: "1280px",
      xl: "1366px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        primary: '#003F5C',
      },
    },
  },
  plugins: [],
};
