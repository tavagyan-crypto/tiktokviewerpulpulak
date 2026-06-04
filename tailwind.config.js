/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tiktok: {
          black: "#000000",
          white: "#ffffff",
          gray: "#161823",
          accent: "#25f4ee",
          pink: "#ff0050"
        }
      }
    },
  },
  plugins: [],
}
