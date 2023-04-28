/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'deg': '#fafa',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

