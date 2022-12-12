/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif']
      },
      colors: {
        'grey': '#7D86A9',
        'darkGrey': '#59607A',
      },
    },
  },
  plugins: [],
};
