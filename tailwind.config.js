/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.65rem', // Adding an extra small text size for mobile
      },
    },
  },
  plugins: [],
}