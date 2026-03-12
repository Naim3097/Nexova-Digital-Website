/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lightBlue: "#7ad9fb",
          darkBlue: "#2a5874",
          black: "#000000",
          whiteTeal: "#f1f7f7",
          gradientStart: "#55e4ff",
          gradientEnd: "#00516a"
        }
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}