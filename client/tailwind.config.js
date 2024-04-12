/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#e74c3c",
        "secondary": "#2ecc71",
        "tertiary": "#ecf0f1"
      }
    },
  },
  plugins: [require("daisyui")],
}