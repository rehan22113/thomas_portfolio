/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens: { 
    'sm': '640px', 
    'md': '1024px', 
    'lg': '1280px', 
    'xl': '1920px', 
  }, 
  theme: {
    extend: {},
  },
  plugins: [],
}

