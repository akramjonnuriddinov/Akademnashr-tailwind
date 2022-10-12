/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontSize: {
        'hero-title': '40px'
      },
      lineHeight: {
        'hero-leading': '48px'
      },
      dropShadow: {
        'book-shadow': '24px 24px 0px 0px rgba(255, 117, 0, 0.6)'
      },
      width: {
        '109': '435px'
      },
      letterSpacing: {
        'medium': '0.5px'
      },
      spacing: {
        '18': '72px'
      }
    },
  },
  plugins: [],
}