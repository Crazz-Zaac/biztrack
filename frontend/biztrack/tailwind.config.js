/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            secondary: "#ff4c15", 
            primary: "#000000", 
            accent: "#ffe0d6",
        }
    },
  },
  plugins: [],
}
