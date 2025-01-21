/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fz-22': '22px',
        'fz-14': '14px'
      }
    },
  },
  plugins: [],
}

