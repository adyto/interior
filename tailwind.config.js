/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-color-palette-1': '#DCB47A',
        'text-color-palette-2': '#1E1E1E',
        'text-color-palette-3': '#F9F9F9',
        'text-color-palette-4': '#081323',
      },
      fontFamily: {
        Gotham: ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
