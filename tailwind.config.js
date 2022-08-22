/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 30px 50px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
