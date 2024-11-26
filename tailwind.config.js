/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep blue
        secondary: '#3B82F6', // Bright blue
        accent: '#60A5FA' // Light blue
      }
    },
  },
  plugins: [],
}